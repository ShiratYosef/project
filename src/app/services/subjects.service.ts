import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../modules/School';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  apiUrl: string = "http://localhost:65103/Api/Subjects";
  constructor(private httpClient: HttpClient) { }

  GetAllSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.apiUrl + '/GetAllSubjects');
  }
}
