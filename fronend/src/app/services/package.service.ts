import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Packages } from '../class/Packages';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(public httpClient:HttpClient) { }

  addPackage(package1)
  {
   return this.httpClient.post("localhost:54216/api/PackageBL/getNewShipment",package1);
  }
  getPackageByID(id): Observable<Packages>
  {
    return this.httpClient.get<Packages>("http://localhost:54216/api/Package/GetPackageByID/" + id);

  }
}
