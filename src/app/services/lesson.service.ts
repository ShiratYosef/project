import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Lesson } from '../modules/Lesson';


@Injectable({
  providedIn: 'root'
})
export class LessonService {

  
  
  apiUrl: string = "http://localhost:65103/Api/Lessons";
  constructor(private httpClient: HttpClient) { }

  GetLessonsDaysByChildId(ChildId:string): Observable<Lesson[][]> {

    return this.httpClient.get<Lesson[][]>(this.apiUrl + '/GetLessonsDaysByChildId?childId='+ChildId);
  }
  GetLessonsByChildId(ChildId:String): Observable<Lesson[]>{
    return this.httpClient.get<Lesson[]>(this.apiUrl + '/GetLessonsByChildId');
  }
}
