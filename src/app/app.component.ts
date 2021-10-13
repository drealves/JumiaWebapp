import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {CustomerService} from "./customer.service";
import {Country, ICountry} from "./country";
import {CountryService} from "./country.service";
import {FormBuilder} from '@angular/forms';
import {Customer, ICustomer} from "./customer";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public customers!: Customer[];

  public countries!: ICountry[];

  public displayedColumns = ['id', 'name', 'phone', 'state', 'countryname', 'countrycode', 'countryregex'];

  public displayedColumns1 = ['id', 'name', 'code', 'regex'];

  public dataSource = new MatTableDataSource<Customer>();

  public dataSource1 = new MatTableDataSource<ICountry>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private customerService: CustomerService,
              private countryService: CountryService,
              private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.getCustomers();
    this.getCountry();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getCustomers(): void {
    this.customerService.getPerson().subscribe(
      (response: Customer[]) => {
        this.customers = response;
        this.dataSource.data = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public getCountry(): void {
    this.countryService.getCountrys().subscribe(
      (response: Country[]) => {
        this.countries = response;
        this.dataSource1.data = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
}
