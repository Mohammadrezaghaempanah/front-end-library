import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private members: Member[] = [
    { fullname: 'mohammadreza ghaempanah', phonnumber: '0918', id: 12 },
    { fullname: 'ali amiri', phonnumber: '0917', id: 18 },
    { fullname: 'hasan mohammadi', phonnumber: '0912', id: 22 }
  ]
  getMember() {
    return this.members;
  }
  addMember(Member: Member) {
    this.members.push(Member);
  }

}
export interface Member {
  fullname: string;
  phonnumber: string;
  id: number;

}
