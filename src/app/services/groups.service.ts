import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {Group} from '../modules/Group'
import { Child } from '../modules/Child';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  apiUrl: string = "http://localhost:65103/Api/Groups";
  constructor(private httpClient: HttpClient) { }

  GetAllGroups(): Observable<Group[]> {

    return this.httpClient.get<Group[]>(this.apiUrl + '/GetAllGroups');
  }
  GetGroupDetails(GroupId:number):Observable<Group[]>{
    return this.httpClient.get<Group[]>(this.apiUrl + '/GetGroupById?GroupId='+GroupId);
  }
  getChildrenByGroupId(GroupId:number):Observable<Child[]>{
    return this.httpClient.get<Child[]>(this.apiUrl+ '/GetChildrenByGroupId?GroupId='+GroupId);
  }
}