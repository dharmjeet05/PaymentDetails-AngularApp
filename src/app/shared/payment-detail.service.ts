import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  formData: PaymentDetail = new PaymentDetail();
  list: PaymentDetail[];

  readonly baseURl = "http://localhost:54226/api/PaymentDetail"

  postPaymentDetail() {
    return this.http.post(this.baseURl, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.baseURl}/${this.formData.paymentDetailId}`, this.formData);
  }
  
  deletePaymentDetail(id:number) {
    return this.http.delete(`${this.baseURl}/${id}`);
  }

  refereshList() {
    this.http.get(this.baseURl)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
}
