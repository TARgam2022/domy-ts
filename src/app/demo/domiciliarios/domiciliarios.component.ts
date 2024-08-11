import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { DOMICILLIARIES } from 'src/data/domicilliary.data';

@Component({
  selector: 'app-domiciliarios',
  standalone: true,
  imports: [SharedModule, NgbDropdownModule, ColorPickerModule],
  templateUrl: './domiciliarios.component.html',
  styleUrl: './domiciliarios.component.scss'
})
export class DomiciliariosComponent {

  domicilliaries = DOMICILLIARIES;

}
