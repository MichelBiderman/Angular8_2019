import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiveListComponent } from './dive-list/dive-list.component';
import { DivesService } from './dives.service';
import { HttpClientModule } from '@angular/common/http';
import { DiveDetailComponent } from './dive-detail/dive-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DiveListComponent, DiveDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[DivesService],
  exports:[DiveListComponent]
})
export class DivesModule { }
