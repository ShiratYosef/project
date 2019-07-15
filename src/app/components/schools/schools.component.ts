import { Component, OnInit } from '@angular/core';
import { SchoolsService } from 'src/app/services/schools.service';
import { School } from 'src/app/modules/Subject';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SchoolsComponent implements OnInit {
schools:School[];
columnsToDisplay = ['SchoolName', 'City', 'Address ', 'Telephon'];
expandedElement: School | null;
stateCtrl: FormControl = new FormControl();
filteredStates: Observable<School[]>;
newSchools:School[];
fileNameDialogRef: MatDialogRef<SchoolsComponent>;
  constructor(private schoolsService:SchoolsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.schoolsService.GetAllSchools().subscribe(state => {
      this.schools = state;
    this.newSchools=this.schools;
    });
  }
  searchBySchoolName(event){
    this.newSchools = this.schools.filter(p => p.SchoolName.startsWith(event) == true)
  }
  
}
