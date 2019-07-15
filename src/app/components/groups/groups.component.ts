import { Component, OnInit } from '@angular/core';
import {Group} from 'src/app/modules/Group'
import { GroupsService } from 'src/app/services/groups.service';
import {animate, state, style, transition, trigger, group} from '@angular/animations';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { GroupDetailsComponent } from '../group-details/group-details.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GroupsComponent implements OnInit {
public groups:Group[];
columnsToDisplay = ['code','GroupName', 'grade1 ', 'grade2','SchoolId'];
expandedElement: Group | null;
fileNameDialogRef: MatDialogRef<GroupDetailsComponent>;
  constructor(private Groupservice:GroupsService, private router:Router,private dialog: MatDialog) { }

  ngOnInit() {
   this.GetAllGroups();
    }
  
  GetAllGroups() 
  {
 this.Groupservice.GetAllGroups().subscribe(state => this.groups=state);
}
ShowGroupDetails(event)
  {
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    var GroupId= event.target.parentElement.cells[0].innerText;
    
    this.Groupservice.GetGroupDetails(GroupId).subscribe(group => 
    {
      
     dialogConfig.data = group;
     this.fileNameDialogRef = this.dialog.open(GroupDetailsComponent,dialogConfig);
    });
  }
}
