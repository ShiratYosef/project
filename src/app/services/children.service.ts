import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Child } from '../modules/Child';
import { Family } from '../modules/Family';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  apiUrl: string = "http://localhost:65103/Api/Children";
  constructor(private httpClient: HttpClient) { }

  GetAllChildren(): Observable<Child[]> {

    return this.httpClient.get<Child[]>(this.apiUrl + '/GetAllChildren');
  }
  GetChildDetails(childId:string): Observable<Child> {
    return this.httpClient.get<Child>(this.apiUrl + '/GetChildById?childId='+childId);
  }
  GetFamilyDetails(FamilyId:number): Observable<Family> {
    return this.httpClient.get<Family>("http://localhost:65103/Api/Families/GetFamilyById?FamilyId="+FamilyId);
  }
}
