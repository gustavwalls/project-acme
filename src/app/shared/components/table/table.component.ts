import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TitleCasePipe, CommonModule } from '@angular/common';
import { MaterialAngularModule } from '../../material-angular/material-angular.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-table',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TitleCasePipe,
    MaterialAngularModule,
    MatIconModule 
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {


  @Input() displayedColumns: string[] = [];
  @Input() dataSource = new MatTableDataSource<any>([]);
  @Input() pageSizeOptions: number[] = [5, 10, 20];

  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() columnHeaders: { [key: string]: string } = {};
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onDelete(element: any): void {
    this.delete.emit(element);
  }

  onEdit(element: any): void {
    this.edit.emit(element);
  }
}
