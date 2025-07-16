import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { AllChatsComponent } from './Components/all-chats/all-chats.component';
import { ChatSectionComponent } from './Components/chat-section/chat-section.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    AllChatsComponent,
    ChatSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ChatBot_Angular';
}
