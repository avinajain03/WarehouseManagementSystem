
import { Component, OnInit, ViewChild } from '@angular/core';
import { inventory } from 'src/models/inventory';
import { ApiServiceService } from 'src/services/api-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  displayedColumns: string[] = ['productId', 'productName', 'quantity', 'price', 'category', 'supplierName', 'sku'];
  inventoryDisplayed: MatTableDataSource<inventory> = new MatTableDataSource<inventory>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.fetchInventoryData().subscribe(data => {
      this.inventoryDisplayed.data = data;
      this.inventoryDisplayed.paginator = this.paginator;
    });
  }

  handlePageEvent(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
  }

  get paginatedRows(): inventory[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.inventoryDisplayed.data.slice(startIndex, endIndex);
  }

  get totalRows(): number {
    return this.inventoryDisplayed.data.length;
  }
}


