import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-section',
  imports: [UserInputComponent, CommonModule],
  templateUrl: './chat-section.component.html',
  styleUrl: './chat-section.component.css',
})
export class ChatSectionComponent {
  @ViewChild('chatSection') chatContainer!: ElementRef;
  chat: any = [];
  receiveMessage(message: string) {
    this.chat.push({
      user: message,
      bot: 'Bot Response',
    });

    setTimeout(() => {
      const container = this.chatContainer.nativeElement;

      container.scrollTop = container.scrollHeight;
    });
  }
}
