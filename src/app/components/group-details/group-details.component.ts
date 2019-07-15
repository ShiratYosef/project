import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Group } from 'src/app/modules/Group';
import { GroupsService } from 'src/app/services/groups.service';
import { ActivatedRoute } from '@angular/router';
import { School } from 'src/app/modules/Subject';
import { Child } from 'src/app/modules/Child';


@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
group:Group;
school:School;
children:Child[];
  constructor( private dialogRef: MatDialogRef<GroupDetailsComponent>,
    private activatedRoute:ActivatedRoute,
    private groupService:GroupsService,
    @Inject(MAT_DIALOG_DATA) data,private c:GroupsService,
        private LessonService:GroupsService
         ) {
           
           this.group=data;
           this.school=data;
         
         }

  ngOnInit() {
    this.getChildrenByGroupId();
  }
  close() {
    this.dialogRef.close();
}
getChildrenByGroupId()
{
  this.groupService.getChildrenByGroupId(this.group.code).subscribe(res=> this.children=res)
}

}
