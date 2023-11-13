import { Component, OnInit, ViewChild } from '@angular/core';
import { vendorOrder } from 'src/models/vendorOrder';
import { MaterialModule } from 'src/material/material.module';
import { ApiServiceService } from 'src/services/api-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  vendorOrders!: MatTableDataSource<vendorOrder>;
  displayedColumns: string[] = ['vendorOrderId','productId', 'productName', 'supplierName', 'price', 'productQuantity', 'actions'];
  totalRecords = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions = [5, 10, 20, 50];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.loadVendorOrders();
  }

  loadVendorOrders(): void {
    this.apiService.getAllOrders().subscribe(data => {
      this.vendorOrders = new MatTableDataSource<vendorOrder>(data);
      this.totalRecords = data.length;
      this.vendorOrders.paginator = this.paginator;
    });
  }


  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
  }

  

  deleteOrder(order: vendorOrder): void {
    const confirmDelete = confirm('Are you sure you want to delete this order?');
    if (confirmDelete) {
      this.apiService.deleteOrder(order.vendorOrderId).subscribe(response => {
        alert(response);
        this.loadVendorOrders();
      }, error => {
        alert(error.error.message);
      });
    }
  }

  

}
