import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-user-confirmation-popup',
  templateUrl: './delete-user-confirmation-popup.component.html',
  styleUrls: ['./delete-user-confirmation-popup.component.scss'],
  standalone: true
})
export class DeleteUserConfirmationPopupComponent {
  @Input() user!: String;
  @Output() onClose = new EventEmitter<null>();

  closeModal():void{
    this.onClose.emit();
  }
}
