import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "./common/GlobalConstants";

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor(private http: HttpClient) { }

  addToCart(id:string, quantity:string) {
    this.http.get(GlobalConstants.baseUrl+`/api/cart/add/${id}/${quantity}`).subscribe({
      next(data){
        console.log(data);
      }
    })
  }
}
