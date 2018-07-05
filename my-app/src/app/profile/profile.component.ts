import { Component, OnInit } from '@angular/core';
import { ProfileService, UserT, ProfileT } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  selectedUserId: string;
  user: UserT;
  users: ProfileT;
  profileIds: Array<string>;

  constructor(private profileSvc: ProfileService) { }

  ngOnInit() {
    this.selectedUserId = '1';

    this.profileSvc.getUserData().subscribe(users => {
      this.users = users;
      this.changeProfile();
    });
  }

  selectProfile(profileId: string) {
    this.selectedUserId = profileId;
    this.changeProfile();
  }

  addFriend(profileId: string) {
    if (!this.user.friends.includes(profileId)) {
        this.user.friends.push(profileId);
    }
  }

  changeProfile() {
    this.user = this.users[this.selectedUserId];
    this.profileIds = Object.keys(this.users).filter(userId => userId != this.selectedUserId);
  }
}
