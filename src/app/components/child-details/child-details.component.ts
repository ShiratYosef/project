import { Component, OnInit, Input, Inject } from '@angular/core';
import { ChildrenService} from 'src/app/services/children.service';
import { Child } from 'src/app/modules/Child';
import { Family } from 'src/app/modules/Family';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LessonService } from 'src/app/services/lesson.service';
import { Lesson } from 'src/app/modules/Lesson';


@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {

  form: FormGroup;
  child:Child;
  family:Family=new Family();
  lessons:Lesson[];
  
  constructor(private ChildrenService:ChildrenService,private activatedRoute:ActivatedRoute,
        private dialogRef: MatDialogRef<ChildDetailsComponent>,
        @Inject(MAT_DIALOG_DATA) data,private c:ChildrenService,
        private LessonService:LessonService
         ) {
           
           this.child=data;
         
         }
 
  ngOnInit() {
    this.GetFamily();
  
  }
  save() {
    this.dialogRef.close(this.form.value);
}
GetChild(ChildId:string)
{
  this.c.GetChildDetails(ChildId).subscribe(state => this.child=state);
  
}
close() {
    this.dialogRef.close();
}
  GetFamily(){  
    this.ChildrenService.GetFamilyDetails(this.child.FamilyId).subscribe(res=> {this.family=res;
      debugger;
      console.log(this.family);});  
  }
  GetLessons(){  

    this.LessonService.GetLessonsByChildId(this.child.IdentityNum).subscribe(res=> this.lessons=res);
  }
}


