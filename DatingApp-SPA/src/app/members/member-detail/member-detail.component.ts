import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/user';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TabsetComponent } from 'ngx-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.sass']
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('memberTabs') memberTabs: TabsetComponent;
  @Output() toggleFlag: EventEmitter<User> = new EventEmitter<User>();
  public user: User;
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  likedByMe = false;

  constructor(private userService: UserService,
              private alertify: AlertifyService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });

    this.userService.checkIfLikedByMe(this.authService.decodedToken.nameid, this.user.id)
      .subscribe(res => {
        this.user.isLikedByMe = res;
      }, error => {
        this.alertify.error(error);
    });

    this.route.queryParams.subscribe(params => {
      const selectedTab = params.tab;
      this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
    });

    this.galleryOptions = [{
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    }];

    this.galleryImages = this.getImages();
  }

  getUserPhoto() {
    return this.user.photoUrl != null ? this.user.photoUrl : '../../../assets/user.png';
  }

  getImages() {
    const imageUrls = [];
    for (const photo of this.user.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    }
    return imageUrls;
  }

  selectTab(tabId: number) {
    this.memberTabs.tabs[tabId].active = true;
  }

  toggleLikeUser() {
    this.userService.toggleLikeUser(this.authService.decodedToken.nameid, this.user.id)
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
