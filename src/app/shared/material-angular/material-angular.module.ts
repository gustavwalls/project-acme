import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginator,
    MatDialogModule
  ],
  exports:[
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginator,
    MatDialogModule
  ]
})
export class MaterialAngularModule { }
