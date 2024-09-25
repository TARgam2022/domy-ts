import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input({ required: true }) name = "";
  @Input({ required: true }) message = "";
  @Input({ required: true }) role = "";
}
