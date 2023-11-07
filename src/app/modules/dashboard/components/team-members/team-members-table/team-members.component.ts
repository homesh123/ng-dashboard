import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeamService } from 'src/app/core/services/team.service';
import { TeamMembersTableItemsComponent } from '../team-members-table-items/team-members-table-items.component';
@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
  standalone: true,
  imports: [NgFor, TeamMembersTableItemsComponent,FormsModule],
})
export class TeamMembersComponent implements OnInit{
  public teamData: any;
  allSelected: boolean = false;

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
}
