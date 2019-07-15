import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../modules/School';
import { HttpClient } from '@angular/common/http';
import { Child } from '../modules/Child';

@Injectable({
  providedIn: 'root'
})
export class WaitingsService {

  apiUrl: string = "http://localhost:65103/Api/Waitings";
  constructor(private httpClient: HttpClient) { }

  GetWaitings(subjectId): Observable<Child[]> {
    return this.httpClient.get<Child[]>(this.apiUrl + `/GetWaitingsChildrenBySubjectId?SubjectId=${subjectId}`);
  }
}