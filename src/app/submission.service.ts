import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Subject} from 'rxjs';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  baseUrl = environment.baseUrl;


  constructor(private httpClient: HttpClient) { }


  getData(context: string) {
    const url = `${this.baseUrl}${context}`;
    return this.httpClient.get<any>(url, httpOptions);

  }

  saveData(context: string, data: any) {
    const url = `${this.baseUrl}${context}`;
    return this.httpClient.post<any>(url, data, httpOptions);
  }


}
