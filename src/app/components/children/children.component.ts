import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Child } from 'src/app/modules/Child';
import { ChildrenService } from 'src/app/services/children.service';
import { Router } from "@angular/router"
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { ChildDetailsComponent } from '../child-details/child-details.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { School } from 'src/app/modules/Subject';
import { SchoolsService } from 'src/app/services/schools.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ChildrenComponent implements OnInit {

  columnsToDisplay1 = ['מספר זהות', 'שם פרטי', 'משפחה', 'תאריך לידה', 'תאריך רישום'];
  columnsToDisplay = ['IdentityNum', 'FirstName', 'FamilyId ', 'BirthDate'];
  expandedElement: Child | null;
  public children: Child[];
  newChildren: Child[];
  schools: School[];
  stateCtrl: FormControl = new FormControl();
  fileNameDialogRef: MatDialogRef<ChildDetailsComponent>;
  constructor(private ChildrenService: ChildrenService, private router: Router, private dialog: MatDialog, private schoolService: SchoolsService) { }


  ngOnInit() {
    this.GetAllChildren();
    
  }
  GetAllChildren() {
    this.ChildrenService.GetAllChildren().subscribe(state => {
    this.children = state;
    this.newChildren = this.children;
   }
    );
  }
  GetAllSchools() {
    this.schoolService.GetAllSchools().subscribe(state => this.schools = state);
  }
  ShowChildDetails(event) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    var ChildId = event.target.parentElement.cells[0].innerText;

    this.ChildrenService.GetChildDetails(ChildId).subscribe(child => {

      dialogConfig.data = child;
      this.fileNameDialogRef = this.dialog.open(ChildDetailsComponent, dialogConfig);
    });
  }
  searchByIdNum(event) {
    this.newChildren = this.children.filter(p => p.IdentityNum.startsWith(event) == true)
  }

}
