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
      bot: '<div class="h-screen flex flex-col"> <app-header /> <div class="grid grid-cols-1 lg:[grid-template-columns:15%_85%] flex-1 overflow-hidden" > <section class="hidden lg:block bg-white border-r-2 border-gray-200"> <app-all-chats /> </section> <main class="w-full h-full overflow-hidden"> <app-chat-section /> </main> </div> </div>',
    });

    setTimeout(() => {
      const container = this.chatContainer.nativeElement;

      container.scrollTop = container.scrollHeight;
    });
  }
}
