import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { CountryListComponent } from './module/location/country/country-list/country-list.component';
import { CountryFormComponent } from './module/location/country/country-form/country-form.component';
import { ZoneListComponent } from './module/location/zone/zone-list/zone-list.component';
import { ZoneFormComponent } from './module/location/zone/zone-form/zone-form.component';
import { CityListComponent } from './module/location/city/city-list/city-list.component';
import { CityFormComponent } from './module/location/city/city-form/city-form.component';
import { BannerListComponent } from './module/catalog/banner/banner-list/banner-list.component';
import { BannerFormComponent } from './module/catalog/banner/banner-form/banner-form.component';
import { CurrencyListComponent } from './module/catalog/currency/currency-list/currency-list.component';
import { CurrencyFormComponent } from './module/catalog/currency/currency-form/currency-form.component';
import { RatingListComponent } from './module/catalog/rating/rating-list/rating-list.component';
import { RatingFormComponent } from './module/catalog/rating/rating-form/rating-form.component';
import { TypeListComponent } from './module/catalog/type/type-list/type-list.component';
import { TypeFormComponent } from './module/catalog/type/type-form/type-form.component';
import { CustomerListComponent } from './module/customer/customer/customer-list/customer-list.component';
import { CustomerFormComponent } from './module/customer/customer/customer-form/customer-form.component';
import { CustomerGroupListComponent } from './module/customer/customer-group/customer-group-list/customer-group-list.component';
import { CustomerGroupFormComponent } from './module/customer/customer-group/customer-group-form/customer-group-form.component';
import { CustomerWishlistComponent } from './module/customer/customer-wishlist/customer-wishlist/customer-wishlist.component';
import { CustomerWishlistFormComponent } from './module/customer/customer-wishlist/customer-wishlist-form/customer-wishlist-form.component';
import { ContactListComponent } from './module/information/contact/contact-list/contact-list.component';
import { ContactFormComponent } from './module/information/contact/contact-form/contact-form.component';
import { ContactTypeListComponent } from './module/information/contact-type/contact-type-list/contact-type-list.component';
import { ContactTypeFormComponent } from './module/information/contact-type/contact-type-form/contact-type-form.component';
import { InformationListComponent } from './module/information/information/information-list/information-list.component';
import { InformationFormComponent } from './module/information/information/information-form/information-form.component';
import { OrderListComponent } from './module/order/order/order-list/order-list.component';
import { OrderFormComponent } from './module/order/order/order-form/order-form.component';
import { OrderDetailComponent } from './module/order/order/order-detail/order-detail.component';
import { OrderStatusListComponent } from './module/order/order-status/order-status-list/order-status-list.component';
import { OrderStatusFormComponent } from './module/order/order-status/order-status-form/order-status-form.component';
import { OrderTypeListComponent } from './module/order/order-type/order-type-list/order-type-list.component';
import { OrderTypeFormComponent } from './module/order/order-type/order-type-form/order-type-form.component';
import { AttributeListComponent } from './module/product/attribute/attribute-list/attribute-list.component';
import { AttributeFormComponent } from './module/product/attribute/attribute-form/attribute-form.component';
import { AttributeGroupListComponent } from './module/product/attribute-group/attribute-group-list/attribute-group-list.component';
import { AttributeGroupFormComponent } from './module/product/attribute-group/attribute-group-form/attribute-group-form.component';
import { CategoryListComponent } from './module/product/category/category-list/category-list.component';
import { CategoryFormComponent } from './module/product/category/category-form/category-form.component';
import { ManufactureListComponent } from './module/product/manufacture/manufacture-list/manufacture-list.component';
import { ManufactureFormComponent } from './module/product/manufacture/manufacture-form/manufacture-form.component';
import { ProductListComponent } from './module/product/product/product-list/product-list.component';
import { ProductFormComponent } from './module/product/product/product-form/product-form.component';
import { ProductReviewListComponent } from './module/product/product-review/product-review-list/product-review-list.component';
import { ProductReviewFormComponent } from './module/product/product-review/product-review-form/product-review-form.component';
import { PurchaseListComponent } from './module/purchase/purchase/purchase-list/purchase-list.component';
import { PurchaseFormComponent } from './module/purchase/purchase/purchase-form/purchase-form.component';
import { PurchaseStatusListComponent } from './module/purchase/purchase-status/purchase-status-list/purchase-status-list.component';
import { PurchaseStatusFormComponent } from './module/purchase/purchase-status/purchase-status-form/purchase-status-form.component';
import { PurchaseTypeListComponent } from './module/purchase/purchase-type/purchase-type-list/purchase-type-list.component';
import { PurchaseTypeFormComponent } from './module/purchase/purchase-type/purchase-type-form/purchase-type-form.component';
import { TaxClassListComponent } from './module/tax/tax-class/tax-class-list/tax-class-list.component';
import { TaxClassFormComponent } from './module/tax/tax-class/tax-class-form/tax-class-form.component';
import { TaxRateListComponent } from './module/tax/tax-rate/tax-rate-list/tax-rate-list.component';
import { TaxRateFormComponent } from './module/tax/tax-rate/tax-rate-form/tax-rate-form.component';
import { LengthListComponent } from './module/unit/length/length-list/length-list.component';
import { LengthFormComponent } from './module/unit/length/length-form/length-form.component';
import { WeightListComponent } from './module/unit/weight/weight-list/weight-list.component';
import { WeightFormComponent } from './module/unit/weight/weight-form/weight-form.component';
import { UserListComponent } from './module/user/user/user-list/user-list.component';
import { UserFormComponent } from './module/user/user/user-form/user-form.component';
import { UserGroupListComponent } from './module/user/user-group/user-group-list/user-group-list.component';
import { UserGroupFormComponent } from './module/user/user-group/user-group-form/user-group-form.component';
import { LocationListComponent } from './module/location/location/location-list/location-list.component';
import { LocationFormComponent } from './module/location/location/location-form/location-form.component';
import { TotalSalesComponent } from './module/report/total-sales/total-sales.component';
import { TotalSalesDayComponent } from './module/report/total-sales-day/total-sales-day.component';
import { TotalSalesMonthComponent } from './module/report/total-sales-month/total-sales-month.component';
import { TotalSalesYearComponent } from './module/report/total-sales-year/total-sales-year.component';
import { VendorListComponent } from './module/vendor/vendor/vendor-list/vendor-list.component';
import { VendorFormComponent } from './module/vendor/vendor/vendor-form/vendor-form.component';
import { VendorGroupListComponent } from './module/vendor/vendor-group/vendor-group-list/vendor-group-list.component';
import { VendorGroupFormComponent } from './module/vendor/vendor-group/vendor-group-form/vendor-group-form.component';
import { StockStatusListComponent } from './module/stock/stock-status/stock-status-list/stock-status-list.component';
import { StockStatusFormComponent } from './module/stock/stock-status/stock-status-form/stock-status-form.component';
import { StockListComponent } from './module/stock/stock/stock-list/stock-list.component';
import { StockFormComponent } from './module/stock/stock/stock-form/stock-form.component';
import { StockDetailComponent } from './module/stock/stock/stock-detail/stock-detail.component';
import { SettingFormComponent } from './module/setting/setting-form/setting-form.component';
import { CouponListComponent } from './module/offer/coupon/coupon-list/coupon-list.component';
import { CouponFormComponent } from './module/offer/coupon/coupon-form/coupon-form.component';




const adminChildRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'banners', component: BannerListComponent },
  { path: 'banner/:id', component: BannerFormComponent },
  { path: 'currencies', component: CurrencyListComponent },
  { path: 'currency/:id', component: CurrencyFormComponent },
  { path: 'ratings', component: RatingListComponent },
  { path: 'rating/:id', component: RatingFormComponent },
  { path: 'types', component: TypeListComponent },
  { path: 'type/:id', component: TypeFormComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customer/:id', component: CustomerFormComponent },
  { path: 'customer-groups', component: CustomerGroupListComponent },
  { path: 'customer-group/:id', component: CustomerGroupFormComponent },
  { path: 'customer-groups', component: CustomerGroupListComponent },
  { path: 'customer-group/:id', component: CustomerGroupFormComponent },
  { path: 'customer-wishlists', component: CustomerWishlistComponent },
  { path: 'customer-wishlist/:id', component: CustomerWishlistFormComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contact/:id', component: ContactFormComponent },
  { path: 'contact-types', component: ContactTypeListComponent },
  { path: 'contact-type/:id', component: ContactTypeFormComponent },
  { path: 'informations', component: InformationListComponent },
  { path: 'information/:id', component: InformationFormComponent },
  { path: 'countries', component: CountryListComponent },
  { path: 'country/:id', component: CountryFormComponent },
  { path: 'zones', component: ZoneListComponent },
  { path: 'zone/:id', component: ZoneFormComponent },
  { path: 'cities', component: CityListComponent },
  { path: 'city/:id', component: CityFormComponent },
  { path: 'locations', component: LocationListComponent },
  { path: 'location/:id', component: LocationFormComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'order/:id', component: OrderFormComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent },
  { path: 'order-statuses', component: OrderStatusListComponent },
  { path: 'order-status/:id', component: OrderStatusFormComponent },
  { path: 'order-types', component: OrderTypeListComponent },
  { path: 'order-type/:id', component: OrderTypeFormComponent },
  { path: 'attributes', component: AttributeListComponent },
  { path: 'attribute/:id', component: AttributeFormComponent },
  { path: 'attribute-groups', component: AttributeGroupListComponent },
  { path: 'attribute-group/:id', component: AttributeGroupFormComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'category/:id', component: CategoryFormComponent },
  { path: 'manufactures', component: ManufactureListComponent },
  { path: 'manufacture/:id', component: ManufactureFormComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductFormComponent },
  { path: 'product-reviews', component: ProductReviewListComponent },
  { path: 'product-review/:id', component: ProductReviewFormComponent },
  { path: 'purchases', component: PurchaseListComponent },
  { path: 'purchase/:id', component: PurchaseFormComponent },
  { path: 'purchase-statuses', component: PurchaseStatusListComponent },
  { path: 'purchase-status/:id', component: PurchaseStatusFormComponent },
  { path: 'purchase-types', component: PurchaseTypeListComponent },
  { path: 'purchase-type/:id', component: PurchaseTypeFormComponent },
  { path: 'tax-classes', component: TaxClassListComponent },
  { path: 'tax-class/:id', component: TaxClassFormComponent },
  { path: 'tax-rates', component: TaxRateListComponent },
  { path: 'tax-rate/:id', component: TaxRateFormComponent },
  { path: 'length-classes', component: LengthListComponent },
  { path: 'length-class/:id', component: LengthFormComponent },
  { path: 'weight-classes', component: WeightListComponent },
  { path: 'weight-class/:id', component: WeightFormComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserFormComponent },
  { path: 'user-groups', component: UserGroupListComponent },
  { path: 'user-group/:id', component: UserGroupFormComponent },
  { path: 'vendors', component: VendorListComponent },
  { path: 'vendor/:id', component: VendorFormComponent },
  { path: 'vendor-groups', component: VendorGroupListComponent },
  { path: 'vendor-group/:id', component: VendorGroupFormComponent },
  { path: 'total-sales', component: TotalSalesComponent },
  { path: 'total-sales-day', component: TotalSalesDayComponent },
  { path: 'total-sales-month', component: TotalSalesMonthComponent },
  { path: 'total-sales-year', component: TotalSalesYearComponent },
  { path: 'stock-statuses', component: StockStatusListComponent },
  { path: 'stock-status/:id', component: StockStatusFormComponent },
  { path: 'stocks', component: StockListComponent },
  { path: 'stock/:id', component: StockFormComponent },
  { path: 'stock-detail/:id', component: StockDetailComponent },
  { path: 'setting', component: SettingFormComponent },
  { path: 'coupons', component: CouponListComponent },
  { path: 'coupon/:id', component: CouponFormComponent },
];

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: adminChildRoutes,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
