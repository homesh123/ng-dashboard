import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-user-popup',
  templateUrl: './edit-user-popup.component.html',
  styleUrls: ['./edit-user-popup.component.scss'],
  standalone: true
})
export class EditUserPopupComponent {
  @Input() user!: String;
  @Output() onClose = new EventEmitter<null>();

  closeModal():void{
    this.onClose.emit();
  }
}
