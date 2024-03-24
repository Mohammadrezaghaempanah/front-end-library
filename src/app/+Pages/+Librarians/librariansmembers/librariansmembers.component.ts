import { Component, Inject, OnInit, inject } from '@angular/core';
import { Member, MemberService } from '../../../+Services/member.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MemberDetailsComponent } from '../member-details/member-details.component';


@Component({
  selector: 'app-librariansmembers',
  standalone: true,
  imports: [MatTableModule, MemberDetailsComponent, MatButtonModule],
  templateUrl: './librariansmembers.component.html',
  styleUrl: './librariansmembers.component.scss'
})
export class LibrariansmembersComponent implements OnInit {
  Memberservice = inject(MemberService);
  data:Member[]=[];
  displayedColumns: string[] = ['fullname','id','phonnumber'];
  ca = 'list';
  ngOnInit(): void {
    this.data = this.Memberservice.getMember();
  }
  addclick() {
    this.ca = 'add';
  }
}
