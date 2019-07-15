import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { School } from '../modules/Subject';
@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  apiUrl: string = "http://localhost:65103/Api/School";
  constructor(private httpClient: HttpClient) { }

  GetAllSchools(): Observable<School[]> {

    return this.httpClient.get<School[]>(this.apiUrl + '/GetAllSchools');
  }
  
}
