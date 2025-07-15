import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { ChatComponent } from './Components/chat/chat.component';
import { UserInputComponent } from './Components/user-input/user-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ChatComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ChatBot_Angular';
}
