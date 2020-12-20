import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Packages } from '../class/Packages';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingSelectionService {


  constructor(public httpClient: HttpClient) { }

  getShitpments() {
    return this.httpClient.get("http://localhost:54216/api/Courier/shipingSelection");
  }
  getMyShitpments( c) :Observable<Array<Packages>>{
    return this.httpClient.get<Array<Packages>>("http://localhost:54216/api/Courier/getMyShipments/"+ c.CourierId);
  }
  // getSelectionShipment(courier, package) {
  //   return this.httpClient.get("http://localhost:54216/api/Courier/GetSelectionShipment" + courier, package)
  // } 

}
