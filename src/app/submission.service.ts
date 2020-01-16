import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  url = '';
  constructor(private http: HttpClient) { }

  submission(user: any) {
    this.http.post<any>(this.url, user);

  }

}
