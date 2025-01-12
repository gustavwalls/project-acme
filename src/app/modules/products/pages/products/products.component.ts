import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';

import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { MaterialAngularModule } from '../../../../shared/material-angular/material-angular.module';
import { DialogService } from '../../../../shared/services/dialog.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterModule,
    TableComponent,
    MaterialAngularModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'precio', 'descripcion', 'options'];

  columnHeaders = {
    title: 'Producto',
    precio: 'Precio',
    descripcion: 'Descripcion',
    options: 'Opciones'
  };

  dataSource = new MatTableDataSource<any>([]);

  constructor(private productService: ProductService, private router: Router, private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.loadProducts();

  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  handleDelete(element: any): void {
    const message = `¿Está seguro de que desea eliminar el producto "${element.title}"?`;
    this.dialogService.confirmDialog(message,'Eliminar').subscribe((confirmed) => {
      if (confirmed) {
        this.productService.deleteProduct(element.id).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(
            (product: any) => product.id !== element.id
          );
        });
      }
    });
  }

  handleEdit(element: any): void {
    console.log('element', element.id);
    this.router.navigate(['/products/edit', element.id]);
  }


}
