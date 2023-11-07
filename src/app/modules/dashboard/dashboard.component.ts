import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamMembersComponent } from './components/team-members/team-members-table/team-members.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { TopSectionComponent } from './layout/components/top-section/top-section.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [SidebarComponent,TopSectionComponent, RouterOutlet,TeamMembersComponent],
})
export class DashboardComponent {

}
