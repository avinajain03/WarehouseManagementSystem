import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from 'src/material/material.module';

import { EmployeesComponent } from './employees/employees.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { OrderComponent } from './order/order.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [ 
    SidebarComponent, 
    InventoryComponent, TopbarComponent, DashboardComponent,EmployeesComponent, SuppliersComponent, AddStaffComponent, ProductsComponent, OrderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule,
    CardModule,
    MaterialModule,
    AppRoutingModule
    
   
  ],
  exports: [
    SidebarComponent,
    InventoryComponent,
    TopbarComponent,
    DashboardComponent,
    AddStaffComponent,
    ProductsComponent,
    OrderComponent
 
    
  ]
})
export class ComponentsModule { }
