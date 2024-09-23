import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { DELIVERIES } from 'src/data/deliveries.data';
import { DOMICILLIARIES } from 'src/data/domicilliary.data';
import { ModalComponent } from 'src/app/modal/modal.component';
@Component({
  selector: 'app-domicilios',
  standalone: true,
  imports: [SharedModule, NgbDropdownModule, ColorPickerModule, ModalComponent],
  templateUrl: './domicilios.component.html',
  styleUrl: './domicilios.component.scss'
})
export class DomiciliosComponent {
  isMultiCollapsed1 = true;
  deliveries = DELIVERIES;
  domicilliaries = DOMICILLIARIES;
  adressee = "";
  adresseeDirection = "";
  deliverer = "";
  delivererDirection = "";
  deliveryMan = "";
  description = "";

  changePerson(event: any) {
    this.deliveryMan = event.target.value;
  }


  handleClick() {
    DELIVERIES.push({
      id: DELIVERIES.length + 1,
      adressee: this.adressee,
      adresseeDirection: this.adresseeDirection,
      deliverer: this.deliverer,
      delivererDirection: this.delivererDirection,
      deliveryMan: this.deliveryMan,
      description: this.description,
      status: 0,
      chat: []
    });
    console.log({
      id: DELIVERIES.length + 1,
      adressee: this.adressee,
      adresseeDirection: this.adresseeDirection,
      deliverer: this.deliverer,
      delivererDirection: this.delivererDirection,
      deliveryMan: this.deliveryMan,
      description: this.description,
      status: 0
    })
  }
}