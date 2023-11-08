import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamService } from 'src/app/core/services/team.service';
import { DeleteUserConfirmationPopupComponent } from 'src/app/shared/components/delete-user-confirmation-popup/delete-user-confirmation-popup.component';
import { EditUserPopupComponent } from 'src/app/shared/components/edit-user-popup/edit-user-popup.component';
import { TeamMembersTableItemsComponent } from '../team-members-table-items/team-members-table-items.component';
@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
  standalone: true,
  imports: [NgFor,NgIf,NgClass, TeamMembersTableItemsComponent,FormsModule,DeleteUserConfirmationPopupComponent,EditUserPopupComponent],
})
export class TeamMembersComponent implements OnInit{
  public teamData: any;
  public allSelected: boolean = false;
  public currentUser!: String;
  public showDeleteUserConfirmationPopup: boolean = false;
  public showEditUserConfirmationPopup: boolean = false;

  constructor(private teamService:TeamService) {
  }
  ngOnInit(): void {
    this.teamService.getData().subscribe(response => {
      this.teamData = response;
    });
  }
  selectAllRows(): void {
    this.teamData.grid_data.forEach((member: any) => member.selected = !this.allSelected);
  }
;
  deleteUser(memberId:string):void{
    const index = this.teamData.grid_data.findIndex((member:any) => member.id === memberId);
    if (index !== -1) {
      this.currentUser =  this.teamData.grid_data[index].name.first_name + ' ' + this.teamData.grid_data[index].name.last_name;
      this.teamData.grid_data.splice(index, 1);
    }
    this.showDeleteUserConfirmationPopup = true;
  }

  editUser(memberId:string):void{
    const index = this.teamData.grid_data.findIndex((member:any) => member.id === memberId);
    this.currentUser =  this.teamData.grid_data[index].name.first_name + ' ' + this.teamData.grid_data[index].name.last_name;
    this.showEditUserConfirmationPopup = true;
  }
}
