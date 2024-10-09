import { Component, inject, TemplateRef, Input, Output, EventEmitter } from '@angular/core';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal, NgbProgressbar, NgbProgressbarModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [NgbDatepickerModule, NgbProgressbarModule],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss'
})
export class ConfirmModalComponent {
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

  @Output() status = new EventEmitter<number>();
  @Input({ required: true }) state = 0;
  changeState(status: number) {
    this.status.emit(status)
  }
}
