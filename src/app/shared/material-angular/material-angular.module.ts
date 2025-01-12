import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginator,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginator,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialAngularModule { }
