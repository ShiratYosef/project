import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildrenComponent } from './components/children/children.component';
import { ChildComponent } from './components/child/child.component';
import { ChildrenPageComponent } from './components/children-page/children-page.component';
import { ChildDetailsComponent } from './components/child-details/child-details.component';
import {Routes, RouterModule} from '@angular/router';
import { ScheduleComponent } from './components/schedule/schedule.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MatAutocompleteModule, MatInputModule, MatCheckboxModule, MatSelectModule,MatDatepickerModule,MatNativeDateModule,} from "@angular/material";
import { SearchByNameChildComponent } from './components/search/search-by-name-child/search-by-name-child.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { WaitingsComponent } from './components/waitings/waitings.component';
import { GroupsComponent } from './components/groups/groups.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { CitiesComponent } from './components/cities/cities.component';


const ROUTES:Routes = [
  {path:"", component:ChildrenPageComponent},
 {path:"detil", component:ChildDetailsComponent},
 {path:"children-page",component:ChildrenPageComponent,children:
 [{path:"children",component:ChildrenComponent},{path:"child-details",component:ChildDetailsComponent}]
},
{path:"group-details",component:GroupDetailsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    ChildComponent,
    ChildrenPageComponent,
    ChildDetailsComponent,
    ScheduleComponent,
    SearchByNameChildComponent,
    WaitingsComponent,
    GroupsComponent,
    GroupDetailsComponent,
    PaymentsComponent,
    SchoolsComponent,
    SubjectsComponent,
    CitiesComponent 
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule,RouterModule.forRoot(ROUTES),BrowserAnimationsModule,MatButtonModule,MatDialogModule,MatAutocompleteModule,MatFormFieldModule, MatInputModule
    ,MatTableModule,MatCheckboxModule, MatSelectModule,FormsModule,ReactiveFormsModule,MatDatepickerModule,MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ChildDetailsComponent]
})
export class AppModule { }