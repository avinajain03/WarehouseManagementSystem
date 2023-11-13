import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { EmployeesComponent } from 'src/components/employees/employees.component';
import { InventoryComponent } from 'src/components/inventory/inventory.component';
import { OrderComponent } from 'src/components/order/order.component';
import { ProductsComponent } from 'src/components/products/products.component';
import { SuppliersComponent } from 'src/components/suppliers/suppliers.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "inventory",
    component: InventoryComponent
  },
  {
    path:"employees",
    component: EmployeesComponent
  },
  {
    path:"suppliers",
    component: SuppliersComponent
  },
  {
    path:"products",
    component: ProductsComponent
  },
  {
    path:"orders",
    component: OrderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
