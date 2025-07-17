import { Component } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-chat-section',
  imports: [UserInputComponent, JsonPipe, CommonModule],
  templateUrl: './chat-section.component.html',
  styleUrl: './chat-section.component.css',
})
export class ChatSectionComponent {
  chat: any = [];
  receiveMessage(message: string) {
    this.chat.push({ user: message, bot: 'this is the response of the bot ' });
    console.log('Chat: ', this.chat);
  }
}
