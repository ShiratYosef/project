import { Component, OnInit} from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';
import { Lesson } from 'src/app/modules/Lesson';
import { Child } from 'src/app/modules/Child';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
 
})
export class ScheduleComponent implements OnInit {
  
  constructor(private LessonService:LessonService) { }
private lessonsForDays:Lesson[][];

  ngOnInit() {
  }
  GetSchedule(childId)
  {
    this.LessonService.GetLessonsDaysByChildId(childId).subscribe(state => this.lessonsForDays=state);

  }
  
}
