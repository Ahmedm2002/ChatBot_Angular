import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../Core/Services/chat.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-chat-section',
  imports: [UserInputComponent, CommonModule, MarkdownModule],
  templateUrl: './chat-section.component.html',
  styleUrl: './chat-section.component.css',
})
export class ChatSectionComponent {
  chatServ = inject(ChatService);
  disableUserInput: boolean = false;

  @ViewChild('chatSection') chatContainer!: ElementRef;

  chat: any = [];
  receiveMessage(message: string) {
    this.chat.push({ user: message });
    this.disableUserInput = true;

    setTimeout(() => {
      const container = this.chatContainer.nativeElement;

      container.scrollTop = container.scrollHeight;
    });

    this.chatServ.userMessage(message).subscribe((res: any) => {
      this.chat[this.chat.length - 1] = {
        ...this.chat[this.chat.length - 1],
        bot: res.botReply,
      };
      setTimeout(() => {
        const container = this.chatContainer.nativeElement;

        container.scrollTop = container.scrollHeight;
      });
      this.disableUserInput = false;
    });
  }
}
