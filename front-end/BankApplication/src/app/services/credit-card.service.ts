import { Injectable } from '@angular/core';
//add HttpClient, Observable, CreditCard, along with the base URL
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/credit-card.model';
const baseUrl = 'http://localhost:8080/api/CreditCards';
@Injectable({
providedIn: 'root'
})
export class CreditCardService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(baseUrl);
  }
  get(id: any): Observable<CreditCard> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByAccount(account: any): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${baseUrl}?account=${account}`);
  }
  
}
  
