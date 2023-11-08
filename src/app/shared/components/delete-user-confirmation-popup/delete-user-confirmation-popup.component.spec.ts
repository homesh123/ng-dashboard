import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserConfirmationPopupComponent } from './delete-user-confirmation-popup.component';

describe('DeleteUserConfirmationPopupComponent', () => {
  let component: DeleteUserConfirmationPopupComponent;
  let fixture: ComponentFixture<DeleteUserConfirmationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUserConfirmationPopupComponent]
    });
    fixture = TestBed.createComponent(DeleteUserConfirmationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
