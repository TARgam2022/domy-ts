import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { DELIVERIES } from 'src/data/deliveries.data';
import { delivery } from 'src/data/interfaces/delivery.class';

@Component({
  selector: 'app-domicilios',
  standalone: true,
  imports: [SharedModule, NgbDropdownModule, ColorPickerModule],
  templateUrl: './domicilios.component.html',
  styleUrl: './domicilios.component.scss'
})
export class DomiciliosComponent {
  isMultiCollapsed1 = true;
  deliveries = DELIVERIES;
  adressee = "";
  adresseeDirection = "";
  deliverer = "";
  delivererDirection = "";
  deliveryMan = "";
  description = "";

  handleClick() {
    DELIVERIES.push({
      id: DELIVERIES.length + 1,
      adressee: this.adressee,
      adresseeDirection: this.adresseeDirection,
      deliverer: this.deliverer,
      delivererDirection: this.delivererDirection,
      deliveryMan: this.deliveryMan,
      description: this.description
    });
    console.log({
      id: DELIVERIES.length + 1,
      adressee: this.adressee,
      adresseeDirection: this.adresseeDirection,
      deliverer: this.deliverer,
      delivererDirection: this.delivererDirection,
      deliveryMan: this.deliveryMan,
      description: this.description
    })
  }


}
