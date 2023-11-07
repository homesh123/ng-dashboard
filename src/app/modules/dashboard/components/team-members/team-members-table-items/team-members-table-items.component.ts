import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: '[team-members-table-items]',
  templateUrl: './team-members-table-items.component.html',
  styleUrls: ['./team-members-table-items.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class TeamMembersTableItemsComponent {
  @Input() member = <any>{};

}
