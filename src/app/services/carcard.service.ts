import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarcardService {

  apiUrl ="https://localhost:44355/api/"
  

  constructor(private httpClient:HttpClient) { }



  getCarDtos():Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getcarimagesbyid?id="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  
}
