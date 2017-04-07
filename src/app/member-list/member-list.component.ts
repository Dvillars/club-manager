import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]

})

export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string;
  filterByRole;

  constructor(
    private router: Router,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
    this.currentRoute = this.router.url;
  }

  onChange(optionFromMenu) {
    this.filterByRole = optionFromMenu;
  }

  goToProfilePage(clickedMember) {
    this.router.navigate(['member', clickedMember.$key])
  }

}
