import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import {Vehicle} from './vehicle';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Vehicle[]>(
      "http://localhost:8080/vehicles"
    ).subscribe(data => this.vehicles = data);
  }

  appendData(newVehicle: any): void {
    this.vehicles.push(newVehicle);
  }

  removeItem(vehicleId: number): void {
    this.http.delete(
      "http://localhost:8080/vehicles/" + vehicleId,
    ).subscribe(data => this.vehicles = this.vehicles.filter((vehicle: Vehicle) => vehicle.id != vehicleId));
  }

}
