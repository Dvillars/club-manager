import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire){
    this.members = angularFire.database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string) {
    return this.angularFire.database.object('members/'+ memberId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(changingMember){
    var albumEntryInFirebase = this.getMemberById(changingMember.$key);
    albumEntryInFirebase.update({
      screenName: changingMember.screenName,
      weapon: changingMember.weapon,
      armor: changingMember.armor,
      role: changingMember.role
    });
  }

  deleteMember(deleteingMember){
    var playerEntryInFirebase = this.getMemberById(deleteingMember.$key);
    playerEntryInFirebase.remove();
  }
}
