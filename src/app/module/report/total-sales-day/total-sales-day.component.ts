import { Component, OnInit } from '@angular/core';
import { TotalSalesDayService } from 'src/app/providers/report/total-sales-day.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { Constant } from 'src/app/helper/constant';

@Component({
  selector: 'app-total-sales-day',
  templateUrl: './total-sales-day.component.html',
  styleUrls: ['./total-sales-day.component.css']
})
export class TotalSalesDayComponent implements OnInit {

  displayedColumns: string[] = ['totalPrice', 'totalQty', 'totalTax', 'total', 'day', 'month', 'year'];
  selection = new SelectionModel<any>(true, []);
  dataSource: any[] = [];
  filterData = {
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    search: '',
    sort_by: 'day',
    sort_dir: 'asc'
  };


  pageSizeOptions;

  constructor(
    private masterService: TotalSalesDayService,
    public dialog: MatDialog
  ) {
    const constant = new Constant();
    this.pageSizeOptions = constant.pageSizeOptions;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.masterService.list(this.filterData).subscribe(response => {
      this.dataSource = response.data;
      this.filterData.length = response.recordsFiltered;
    });
  }

  applyFilter(filterValue: string) {
    this.filterData.search = filterValue.trim().toLowerCase();
    this.filterData.pageIndex = 0;
    this.getData();
  }

  changePage(event) {
    this.filterData.pageIndex = event.pageIndex;
    this.filterData.pageSize = event.pageSize;
    this.getData();
  }

  sortData(event) {
    this.filterData.sort_by = event.active;
    this.filterData.sort_dir = event.direction;
    this.filterData.pageIndex = 0;
    this.getData();
  }

}
