import { Component, OnInit } from '@angular/core';
import { MaterialAngularModule } from '../../../../shared/material-angular/material-angular.module';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { RouterModule } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../../../products/services/product.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    RouterModule,
    TableComponent,
    MaterialAngularModule
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'precio', 'descripcion'];

  columnHeaders = {
    title: 'Producto',
    precio: 'Precio',
    descripcion: 'Descripcion',
  };
  dataSource = new MatTableDataSource<any>([]);

  constructor(private productService: ProductService, private router: RouterModule
  ) { }

  ngOnInit(): void {
    this.loadProducts();

  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
