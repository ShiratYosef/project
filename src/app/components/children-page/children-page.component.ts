
import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/modules/Child';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material";


@Component({
  selector: 'app-children-page',
  templateUrl: './children-page.component.html',
  styleUrls: ['./children-page.component.css']
})
export class ChildrenPageComponent implements OnInit {

  constructor() { }
  private SelectedChild:Child;
  ngOnInit() {
  }
  // SetSelectedChild(event)
  // {
  //   debugger;
  //   this.ruoter.navigate(['/child-details',{child:event.id}]);
  // }
 
}
