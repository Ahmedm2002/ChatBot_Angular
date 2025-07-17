import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  userMessage: string = '';
  @Output() message = new EventEmitter<string>();

  sendMessage() {
    console.log(this.message);
    if (this.userMessage.length === 0) return;
    this.message.emit(this.userMessage);
    this.userMessage = '';
  }

  enterPressed() {
    this.sendMessage();
  }
}
