import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from '../member.service';
import { Member } from '../member.model'

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [MemberService]

})
export class NewMemberComponent implements OnInit {

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
  }

  createNewMember(screenName:string, weapon:string, armor:string, role:string){
    var newMember: Member = new Member(screenName, weapon, armor, role);
    this.memberService.addMember(newMember)
  }


}
