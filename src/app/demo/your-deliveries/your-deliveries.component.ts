import { Component } from '@angular/core';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { MessageComponent } from 'src/app/message/message.component';
import { FormsModule } from '@angular/forms';
import { CHAT } from 'src/data/chat.data';
@Component({
  selector: 'app-your-deliveries',
  standalone: true,
  imports: [CardComponent, MessageComponent, FormsModule],
  templateUrl: './your-deliveries.component.html',
  styleUrl: './your-deliveries.component.scss'
})

export class YourDeliveriesComponent {
  chat = CHAT;
  message = "";

  sendMessage() {
    CHAT.push({
      name: "Thomas",
      role: "user",
      message: this.message
    });
  }
}
