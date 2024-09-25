import { Component, inject, Input, TemplateRef } from '@angular/core';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal, NgbProgressbar, NgbProgressbarModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgbDatepickerModule, NgbProgressbarModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  private modalService = inject(NgbModal);
  closeResult = '';

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  @Input({ required: true }) id = 1;
  @Input({ required: true }) adressee = "hola";
  @Input({ required: true }) adresseeDirection = "hola";
  @Input({ required: true }) deliverer = "hola";
  @Input({ required: true }) delivererDirection = "hola";
  @Input({ required: true }) deliveryMan = "hola";
  @Input({ required: true }) description = "hola";
  @Input({ required: true }) status = 2;

  constructor(config: NgbProgressbarConfig) {
    config.animated = true;
  }
  statusTest = 3

}
