import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../Core/Services/chat.service';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-section',
  imports: [CommonModule, MarkdownModule, FormsModule],
  templateUrl: './chat-section.component.html',
  styleUrl: './chat-section.component.css',
})
export class ChatSectionComponent {
  chatServ = inject(ChatService);
  isInputDisabled: boolean = false;

  @ViewChild('chatSection') chatContainer!: ElementRef;

  chat: any = [];

  userMessage: string = '';

  sendPrompt() {
    if (this.isInputDisabled || this.userMessage.length === 0) return;

    this.chat.push({ user: this.userMessage });
    this.isInputDisabled = true;

    this.userMessage = '';

    setTimeout(() => {
      const container = this.chatContainer.nativeElement;

      container.scrollTop = container.scrollHeight;
    });

    this.chatServ.userMessage(this.userMessage).subscribe((res: any) => {
      this.chat[this.chat.length - 1] = {
        ...this.chat[this.chat.length - 1],
        bot: res.botReply,
      };
      setTimeout(() => {
        const container = this.chatContainer.nativeElement;

        container.scrollTop = container.scrollHeight;
      });
      this.isInputDisabled = false;
    });
  }
}
