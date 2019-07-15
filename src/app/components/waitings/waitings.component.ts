import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/modules/School';
import { SubjectsService } from 'src/app/services/subjects.service';
import { WaitingsService } from 'src/app/services/waitings.service';
import { Child } from 'src/app/modules/Child';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-waitings',
  templateUrl: './waitings.component.html',
  styleUrls: ['./waitings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WaitingsComponent implements OnInit {

constructor(private SubjectsService:SubjectsService,private WaitingsService:WaitingsService) { }
private subjects:Subject[];
private children:Child[];
columnsToDisplay = ['IdentityNum','FirstName', 'FamilyId ', 'BirthDate'];
expandedElement: Child | null;

  ngOnInit() {
    this.getAllSubjects();
  }
  
  getAllSubjects(){
    this.SubjectsService.GetAllSubjects().subscribe(state => this.subjects=state);
  }
  getWaitings(event)
  {
     this.WaitingsService.GetWaitings(event).subscribe(state => {
       this.children=state;
    });
  }
}

