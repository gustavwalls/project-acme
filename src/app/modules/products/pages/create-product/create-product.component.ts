import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MaterialAngularModule } from '../../../../shared/material-angular/material-angular.module';
import { DialogService } from '../../../../shared/services/dialog.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MaterialAngularModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  @Output() productCreated = new EventEmitter<any>();
  productId: string = '';
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ,private dialogService: DialogService
  ) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      precio: [0, [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id']
      if (params['id']) {
        this.isEditMode = true;
        this.loadProductData();
      }
    });
  }

  loadProductData(): void {
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(
        (product) => {
          this.productForm.patchValue(product);
        },
        (error) => {
          console.error('Error al cargar el producto:', error);
          alert('No se pudo cargar la información del producto.');
          this.router.navigate(['/products']);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      if (this.isEditMode && this.productId !== null) {
        const message = `¿Está seguro de que desea actualizar el producto?`;
        this.dialogService.confirmDialog(message,'Actualizar').subscribe((confirmed) => {
          if (confirmed) {
            this.productService.updateProduct(this.productId, this.productForm.value).subscribe(
              (response) => {
                console.log('Producto actualizado:', response);
                this.router.navigate(['/products']);
              },
              (error) => {
                console.error('Error al actualizar el producto:', error);
                alert('Ocurrió un error al actualizar el producto.');
              }
            );
          }
        });
        
      } else {
        const message = `¿Está seguro de que desea agregar el producto?`;
        this.dialogService.confirmDialog(message,'Agregar').subscribe((confirmed) => {
          if (confirmed) {
            this.productService.createProduct(this.productForm.value).subscribe(
              (response) => {
                console.log('Producto creado:', response);
                this.productForm.reset();
                this.router.navigate(['/products']);
              },
              (error) => {
                console.error('Error al crear el producto:', error);
                alert('Ocurrió un error al crear el producto.');
              }
            );
          }
        });

      }
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
