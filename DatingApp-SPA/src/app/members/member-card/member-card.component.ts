import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.sass']
})
export class MemberCardComponent implements OnInit {
  @Input() user: User;
  @Output() toggleFlag: EventEmitter<User> = new EventEmitter<User>();

  constructor(private authService: AuthService,
              private userService: UserService,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

  getUserPhoto() {
    return this.user.photoUrl != null ? this.user.photoUrl : '../../../assets/user.png';
  }

  sendLike(recipientId: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, recipientId)
      .subscribe(data => {
        this.alertify.success('You have liked: ' + this.user.knownAs);
      }, error => {
        this.alertify.error(error);
      });
  }

  toggleLikeUser(recipientId: number) {
    this.userService.toggleLikeUser(this.authService.decodedToken.nameid, recipientId)
      .subscribe(data => {
        if (this.user.isLikedByMe) {
          this.user.isLikedByMe = false;
          this.alertify.warning('You have unliked: ' + this.user.knownAs);
        } else {
          this.user.isLikedByMe = true;
          this.alertify.success('You have liked: ' + this.user.knownAs);
        }
        this.toggleLikeEmitter(this.user);
      }, error => {
        this.alertify.error(error);
      });
  }

  toggleLikeEmitter(user: User) {
    this.toggleFlag.emit(user);
  }

}
