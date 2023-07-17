import { Component, Input, Output, EventEmitter } from '@angular/core';
 import { CommonModule } from '@angular/common';

import { VehicleDisplayComponent } from './../vehicle-display/vehicle-display.component';
import { VehicleEditComponent } from './../vehicle-edit/vehicle-edit.component';

import {Vehicle} from './../vehicle';

@Component({
  selector: 'app-vehicle-wrapper',
  templateUrl: './vehicle-wrapper.component.html',
  styleUrls: ['./vehicle-wrapper.component.css'],
  standalone: true,
  imports: [VehicleDisplayComponent, VehicleEditComponent, CommonModule]
})
export class VehicleWrapperComponent {

  @Input() vehicle: Vehicle = new Vehicle(0, "", "", 0, "");
  @Output() removeItemEvent = new EventEmitter();
  editable: boolean = false;

  handleEditClick(): void {
    this.editable = true;
  }

  handleSaveEdition(vehicle: Vehicle): void {
    this.editable = false
    this.vehicle = vehicle;
  }


}
