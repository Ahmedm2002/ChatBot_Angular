import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { AllChatsComponent } from '../../Components/all-chats/all-chats.component';
import { ChatSectionComponent } from '../../Components/chat-section/chat-section.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, AllChatsComponent, ChatSectionComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
