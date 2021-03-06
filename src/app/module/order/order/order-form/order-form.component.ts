import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/providers/order/order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/providers/form/form.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderTypeService } from 'src/app/providers/order/order-type.service';
import { CustomerService } from 'src/app/providers/customer/customer.service';
import { OrderStatusService } from 'src/app/providers/order/order-status.service';
import { Constant } from 'src/app/helper/constant';
import { startWith, debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { OrderCartService } from 'src/app/providers/order/order-cart.service';
import { ProductService } from 'src/app/providers/product/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderCartListComponent } from '../order-cart-list/order-cart-list.component';

@Component({
  providers: [OrderCartListComponent],
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  public pageHeading = 'Order Form';
  public data: any;
  public status: any;
  public message: any;
  public messageTitle: string;
  hide = true;

  isLoading = false;

  orderTypes: any = [];
  orderStatuses: any = [];
  customers: any = [];
  addresses: any = [];
  products: any = [];
  carts: any = [];
  cartTotals: any = [];
  cartDisplayedColumns: string[] = ['product', 'product_image', 'quantity', 'totalFinalPrice', 'totalDiscount', 'total', 'action'];

  orderTypeId;
  orderType: { id: any; name: any; };
  customerId;
  customer: { id: any; name: any; };
  addressId;
  address: { id: any; address: any; };
  orderStatusId;
  orderStatus: { id: any; name: any; };
  comment;


  public formErrors = {
    customerId: '',
    customer: '',
    addressId: '',
    address: '',
    orderTypeId: '',
    orderType: '',
    orderStatusId: '',
    orderStatus: '',
    comment: '',
  };

  form: FormGroup;

  constructor(
    public masterService: OrderService,
    public orderTypeService: OrderTypeService,
    public orderStatusService: OrderStatusService,
    public customerService: CustomerService,
    public orderCartService: OrderCartService,
    public productService: ProductService,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
    private orderCartListComponent: OrderCartListComponent
  ) { }

  getId() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') ? this.activatedRoute.snapshot.paramMap.get('id') : 'new';
    return id;
  }

  goBack() {
    this.router.navigate(['/orders']);
  }

  getOrderTypeAutocomplete() {
    const constant = new Constant();
    this.form
      .get('orderType')
      .valueChanges.pipe(
        startWith(''),
        debounceTime(1000),
        tap(() => (this.isLoading = true)),
        switchMap(value =>
          this.orderTypeService
            .list({
              search: value,
              pageSize: constant.autocompleteListSize,
              pageIndex: 0,
              sort_by: 'name'
            })
            .pipe(finalize(() => (this.isLoading = false)))
        )
      )
      .subscribe(res => {
        if (res.status) {
          this.orderTypes = res.data;
        }
      });
  }

  getOrderStatusAutocomplete() {
    const constant = new Constant();
    this.form
      .get('orderStatus')
      .valueChanges.pipe(
        startWith(''),
        debounceTime(1000),
        tap(() => (this.isLoading = true)),
        switchMap(value =>
          this.orderStatusService
            .list({
              search: value,
              pageSize: constant.autocompleteListSize,
              pageIndex: 0,
              sort_by: 'name'
            })
            .pipe(finalize(() => (this.isLoading = false)))
        )
      )
      .subscribe(res => {
        if (res.status) {
          this.orderStatuses = res.data;
        }
      });
  }

  getCustomerAutocomplete() {
    const constant = new Constant();
    this.form
      .get('customer')
      .valueChanges.pipe(
        startWith(''),
        debounceTime(1000),
        tap(() => (this.isLoading = true)),
        switchMap(value =>
          this.customerService
            .list({
              search: value,
              pageSize: constant.autocompleteListSize,
              pageIndex: 0,
              sort_by: 'name'
            })
            .pipe(finalize(() => (this.isLoading = false)))
        )
      )
      .subscribe(res => {
        if (res.status) {
          this.customers = res.data;
        }
      });
  }

  getAddressAutocomplete() {
    const constant = new Constant();

    this.form
      .get('address')
      .valueChanges.pipe(
        startWith(''),
        debounceTime(1000),
        tap(() => {
          this.addresses = [];
          this.isLoading = true;
        }),
        switchMap(value =>
          this.customerService
            .addressList({
              customerId: this.customerId,
              search: value,
              pageSize: constant.autocompleteListSize,
              pageIndex: 0,
              sort_by: 'name'
            })
            .pipe(finalize(() => (this.isLoading = false)))
        )
      )
      .subscribe(res => {
        if (res.status) {
          this.addresses = res.data;
        }
      });
  }

  onAutoSelectionChanged(autoId, event: MatAutocompleteSelectedEvent) {
    this.form.controls[`${autoId}`].setValue(event.option.value.id);
  }

  displayFn(data: any): string {
    return data ? data.name : data;
  }

  displayAddressFn(data: any): string {
    return data ? data.address : data;
  }

  setErrors() {
    this.formErrors = this.formService.validateForm(
      this.form,
      this.formErrors,
      false
    );
  }

  ngOnInit() {
    if (this.getId() !== 'new') {
      this.getDetail(this.getId());
    }

    this.form = this.formBuilder.group({
      orderTypeId: [this.orderTypeId, Validators.required],
      orderType: [this.orderType, Validators.required],
      customerId: [this.customerId, Validators.required],
      customer: [this.customer, Validators.required],
      addressId: [this.addressId, Validators.required],
      address: [this.address, Validators.required],
      orderStatusId: [this.orderStatusId, Validators.required],
      orderStatus: [this.orderStatus, Validators.required],
      comment: [this.comment, Validators.required],
    });

    this.getOrderStatusAutocomplete();
    this.getOrderTypeAutocomplete();
    this.getCustomerAutocomplete();
    this.getAddressAutocomplete();


    this.setErrors();
  }

  markFormGroupTouched() {
    this.formService.markFormGroupTouched(this.form);
  }

  isFormValid() {
    let status = false;
    if (this.form.valid) {
      status = true;
    }

    return status;
  }

  getDetail(id) {
    this.masterService.detail(id).subscribe(
      response => {
        if (response.status) {
          this.orderTypeId = response.data.order_type_id;
          this.orderType = {
            id: response.data.order_type_id,
            name: response.data.order_type
          };
          this.customerId = response.data.customer_id;
          this.customer = {
            id: response.data.customer_id,
            name: response.data.name
          };
          this.addressId = response.data.address_id;
          this.address = {
            id: response.data.address_id,
            address: response.data.address
          };
          this.orderStatusId = response.data.order_status_id;
          this.orderStatus = {
            id: response.data.order_status_id,
            name: response.data.order_status
          };
          this.comment = response.data.comment;

          if (response.data.products) {
            response.data.products.forEach(element => {
              this.addCart(element);
            });
          }

        }
      },
      err => {
        console.error(err);
      }
    );

  }

  nextProcess() {
    console.log('this.customerId', this.customerId);
    this.orderCartListComponent.ngOnInit();
  }

  addCart(cartData) {
    const data = {
      customerId: this.customerId,
      productId: cartData.product_id,
      quantity: cartData.quantity,
    };

    this.orderCartService.save(data, 'new').subscribe(
      response => {
        if (!response.status) {
          if (response.result) {
            response.result.forEach((element: { id: any; text: any; }) => {
              this.formErrors[`${element.id}`] = element.text;
            });
          }
        }
      },
      err => {
        console.error(err);
      }
    );
  }


  onSubmit() {
    // mark all fields as touched
    this.markFormGroupTouched();

    if (this.isFormValid()) {
      this.spinner.show();
      const data = {
        orderTypeId: this.form.value.orderTypeId,
        customerId: this.form.value.customerId,
        orderStatusId: this.form.value.orderStatusId,
        addressId: this.form.value.addressId,
        comment: this.form.value.comment,
      };

      this.masterService.save(data, this.getId()).subscribe(
        response => {
          if (!response.status) {
            if (response.result) {
              response.result.forEach((element: { id: any; text: any; }) => {
                this.formErrors[`${element.id}`] = element.text;
              });
            }
          } else {
            localStorage.removeItem('coupon');
            this.router.navigate(['/orders']);
          }

          this.spinner.hide();
          this.snackBar.open(response.message, 'X', {
            duration: 2000,
          });
        },
        err => {
          console.error(err);
        }
      );
    } else {
      this.setErrors();
    }
  }


}
