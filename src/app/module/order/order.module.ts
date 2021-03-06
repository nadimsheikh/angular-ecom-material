import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { OrderTypeListComponent } from './order-type/order-type-list/order-type-list.component';
import { OrderTypeFormComponent } from './order-type/order-type-form/order-type-form.component';
import { OrderStatusListComponent } from './order-status/order-status-list/order-status-list.component';
import { OrderStatusFormComponent } from './order-status/order-status-form/order-status-form.component';

import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { CouponApplyFormComponent } from './order/coupon-apply-form/coupon-apply-form.component';
import { OrderCartListComponent } from './order/order-cart-list/order-cart-list.component';
import { OrderHistoryComponent } from './order/order-history/order-history.component';
import { OrderProductListComponent } from './order/order-product-list/order-product-list.component';
import { OrderTotalListComponent } from './order/order-total-list/order-total-list.component';

@NgModule({
  declarations: [OrderListComponent, OrderFormComponent, OrderTypeListComponent, OrderTypeFormComponent, OrderStatusListComponent, OrderStatusFormComponent, OrderDetailComponent, CouponApplyFormComponent, OrderCartListComponent, OrderHistoryComponent, OrderProductListComponent, OrderTotalListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OrderModule { }
