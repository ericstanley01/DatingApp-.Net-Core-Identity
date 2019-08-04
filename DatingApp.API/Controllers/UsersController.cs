using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.DTOs;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [Authorize]
    [Route("api/[controller]")]
    //[ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IDatingRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery]UserParams userParams)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var userFromRepo = await _repo.GetUser(currentUserId);
            userParams.UserId = currentUserId;

            if (string.IsNullOrEmpty(userParams.Gender)) {
                userParams.Gender = userFromRepo.Gender == "male" ? "female" : "male";
            }

            var users = await _repo.GetUsers(userParams);
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDTO>>(users);

            foreach (var user in usersToReturn)
                user.IsLikedByMe = await _repo.GetLike(userFromRepo.Id, user.Id) != null;
            
            Response.AddPagination(users.CurrentPage, users.PageSize, 
                users.TotalCount, users.TotalPages);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailedDTO>(user);

            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody]UserForUpdateDTO userForUpdateDTO) 
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) 
                return Unauthorized();

            var userFromRepo = await _repo.GetUser(id);
            
            _mapper.Map(userForUpdateDTO, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();
            
            throw new Exception ($"Updating user {id} failed on save");
        }

        [HttpPost("{id}/like/{recipientId}")]
        public async Task<IActionResult> LikeUser(int id, int recipientId) {

            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var like = await _repo.GetLike(id, recipientId);
            var recipientUser = await _repo.GetUser(recipientId);

            if (like != null) 
                return BadRequest("You already like " + recipientUser.KnownAs);

            if (await _repo.GetUser(recipientId) == null) 
                return NotFound();

            like = new Like {
                LikerId = id,
                LikeeId = recipientId
            };

            _repo.Add<Like>(like);

            if (await _repo.SaveAll())
                return Ok();

            return BadRequest("Failed to like user");
        }

        [HttpPost("{id}/toggleLikeUser/{recipientId}")]
        public async Task<IActionResult> ToggleLikeUser(int id, int recipientId) {

            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            if (await _repo.GetUser(recipientId) == null)
                return NotFound();

            var like = await _repo.GetLike(id, recipientId);

            if (like != null)
                _repo.Delete(like);
            else {
                like = new Like
                {
                    LikerId = id,
                    LikeeId = recipientId
                };
                _repo.Add<Like>(like);
            }

            if (await _repo.SaveAll())
                return Ok();

            return BadRequest("Error while toggling like for the user!");

        }

        [HttpGet("CheckIfLikedByMe")]
        public async Task<IActionResult> CheckIfLikedByMe(int id, int recipientId) {

            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var like = await _repo.GetLike(id, recipientId);

            return Ok(like != null); 
        }

    }
}