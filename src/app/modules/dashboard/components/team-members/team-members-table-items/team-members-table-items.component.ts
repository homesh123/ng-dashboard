import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IntialCasePipe } from 'src/app/shared/pipes/intial-case.pipe';

@Component({
  selector: '[team-members-table-items]',
  templateUrl: './team-members-table-items.component.html',
  styleUrls: ['./team-members-table-items.component.scss'],
  standalone: true,
  imports: [NgIf,NgFor,FormsModule,IntialCasePipe,NgClass,NgStyle],
})
export class TeamMembersTableItemsComponent {
  @Input() member = <any>{};
  @Output() onUserDelete = new EventEmitter<string>();
  @Output() onUserEdit = new EventEmitter<string>();
  
  deleteUser(memberId:string): void{
    this.onUserDelete.emit(memberId)
  }

  editUser(memberId:string): void{
    this.onUserEdit.emit(memberId)
  }
}
