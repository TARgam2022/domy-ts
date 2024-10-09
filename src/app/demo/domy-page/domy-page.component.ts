import { Component } from '@angular/core';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { MessageComponent } from 'src/app/message/message.component';
import { FormsModule } from '@angular/forms';
import { CHAT } from 'src/data/chat.data';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matLocationOnRound, matCheckRound, matMarkunreadMailboxRound, matMyLocationRound, matPersonRound, matMotorcycleRound, matInfoRound, matArrowForwardRound } from '@ng-icons/material-icons/round'
import { ConfirmModalComponent } from 'src/app/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-domy-page',
  standalone: true,
  imports: [CardComponent, MessageComponent, FormsModule, NgIconComponent, ConfirmModalComponent],
  templateUrl: './domy-page.component.html',
  styleUrl: './domy-page.component.scss',
  viewProviders: [provideIcons({ matLocationOnRound, matCheckRound, matMarkunreadMailboxRound, matMyLocationRound, matPersonRound, matMotorcycleRound, matInfoRound, matArrowForwardRound })],
})
export class DomyPageComponent {
  chat = CHAT;
  message = "";
  status = 3;
  sendMessage() {
    CHAT.push({
      name: "Thomas",
      role: "user",
      message: this.message
    });
  }

  handleData(status: number) {
    this.status = status;
  }

}
