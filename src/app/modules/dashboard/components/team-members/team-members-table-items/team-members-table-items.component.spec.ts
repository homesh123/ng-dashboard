import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersTableItemsComponent } from './team-members-table-items.component';

describe('TeamMembersTableItemsComponent', () => {
  let component: TeamMembersTableItemsComponent;
  let fixture: ComponentFixture<TeamMembersTableItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMembersTableItemsComponent]
    });
    fixture = TestBed.createComponent(TeamMembersTableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
