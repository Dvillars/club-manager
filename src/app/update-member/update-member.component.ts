import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css'],
  providers: [MemberService]

})
export class UpdateMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
  }

  UpdateMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  DeleteMember(memberToUpdate){
    this.memberService.deleteMember(memberToUpdate); 
  }
}
