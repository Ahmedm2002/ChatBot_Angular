import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor() {}

  http = inject(HttpClient);

  baseUrl = 'https://everyday-ai-backend.vercel.app/';
  userMessage(userPrompt: string) {
    return this.http.post(`${this.baseUrl}chat/prompt`, { userPrompt });
  }
}
