import { Injectable } from '@angular/core';
import { inventory } from 'src/models/inventory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from 'src/models/users';
import { forkJoin, map } from 'rxjs';
import { inventoryDTO } from 'src/models/inventoryDTO';
import { vendorOrder } from 'src/models/vendorOrder';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  inventoryDisplayed: inventory[] = [];

  constructor(private http: HttpClient) { }

  fetchInventoryData(): Observable<inventory[]> {
    return this.http.get<inventory[]>(`http://localhost:8080/inventory`);
  }

  fetchEmployeeData(): Observable<users[]> {
    const adminUsers$ = this.http.get<users[]>('http://localhost:8080/users/role/admin');
    const staffUsers$ = this.http.get<users[]>('http://localhost:8080/users/role/staff');

    return forkJoin([adminUsers$, staffUsers$]).pipe(
      map(usersArrays => ([] as Array<users>).concat(...usersArrays))
    );
  }


  fetchSupplierData(): Observable<users[]>{
    return this.http.get<users[]>(`http://localhost:8080/users/role/supplier`)
  }

  addStaffData(staff: users): Observable<string> {
    const url = 'http://localhost:8080/users/staff';
    return this.http.post<string>(url, staff);
  }

  getAllProducts(): Observable<inventoryDTO[]> {
    const url = `http://localhost:8080/product`;
    console.warn(this.http.get<inventoryDTO[]>(url));
    return this.http.get<inventoryDTO[]>(url);
  }

  addToCart(product: inventoryDTO): Observable<any> {
    const url = `http://localhost:8080/addToCart`;
    return this.http.post<vendorOrder>(url, product);
  }

  getAllOrders(): Observable<vendorOrder[]> {
    const url = `http://localhost:8080/getAllOrders`;
    return this.http.get<vendorOrder[]>(url);
  }

  
  deleteOrder(vendorOrderId: String) {
    // console.log(this.http.delete<any>(`http://localhost:8080/delete/${vendorOrderId}`));
    return this.http.delete<any>(`http://localhost:8080/delete/${vendorOrderId}`);
  }
}
