import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { MessageComponent } from 'src/app/message/message.component';
import { FormsModule } from '@angular/forms';
import { CHAT } from 'src/data/chat.data';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matLocationOnRound, matCheckRound, matMarkunreadMailboxRound, matMyLocationRound, matPersonRound, matMotorcycleRound, matInfoRound, matArrowForwardRound } from '@ng-icons/material-icons/round'
import { StatusService } from 'src/services/status.service';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CardComponent, MessageComponent, FormsModule, NgIconComponent],
  viewProviders: [provideIcons({ matLocationOnRound, matCheckRound, matMarkunreadMailboxRound, matMyLocationRound, matPersonRound, matMotorcycleRound, matInfoRound, matArrowForwardRound })],
  templateUrl: './your-deliveries.component.html',
  styleUrl: './your-deliveries.component.scss'
})

export class YourDeliveriesComponent implements OnInit{
  chat = CHAT;
  message = "";
  status = 3;

  constructor(private statusService: StatusService, private changeDetectorRef: ChangeDetectorRef) {}

ngOnInit() {
  // ...
  this.statusService.status$.subscribe(status => {
    this.status = status;
    this.changeDetectorRef.detectChanges();
  });
}

  sendMessage() {
    CHAT.push({
      name: "Thomas",
      role: "user",
      message: this.message
    });
  }
}
