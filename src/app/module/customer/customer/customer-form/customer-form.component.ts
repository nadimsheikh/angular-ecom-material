import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/providers/customer/customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from 'src/app/providers/form/form.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Constant } from 'src/app/helper/constant';
import { startWith, debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CustomerGroupService } from 'src/app/providers/customer/customer-group.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  public pageHeading = 'Customer Form';
  public data: any;
  public status: any;
  public message: any;
  public messageTitle: string;
  hide = true;

  name;
  email;
  contact;
  panNumber;
  gstNumber;
  group;
  groupId;
  groups;
  isLoading = false;

  public form: FormGroup;
  public formErrors = {
    group: '',
    name: '',
    email: '',
    contact: '',
    panNumber: '',
    gstNumber: '',
  };

  constructor(
    public masterService: CustomerService,
    public customerGroupService: CustomerGroupService,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService
  ) { }

  getId() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') ? this.activatedRoute.snapshot.paramMap.get('id') : 'new';
    return id;
  }

  goBack() {
    this.router.navigate(['/customers']);
  }

  ngOnInit() {

    if (this.getId() !== 'new') {
      this.getDetail(this.getId());
    }

    this.form = this.formBuilder.group({
      group: [this.group, Validators.required],
      groupId: [this.groupId],
      name: [this.name, Validators.required],
      email: [this.email, Validators.required],
      contact: [this.contact, Validators.required],
      gstNumber: [this.gstNumber],
      panNumber: [this.panNumber],
    });

    this.form.valueChanges.subscribe(data => {
      this.setErrors();
    });

    this.getAutocomplete();
  }

  getAutocomplete() {
    const constant = new Constant();
    this.form
      .get('group')
      .valueChanges
      .pipe(
        startWith(''),
        debounceTime(1000),
        tap(() => this.isLoading = true),
        switchMap(value =>
          this.customerGroupService.list({ search: value, pageSize: constant.autocompleteListSize, pageIndex: 0, sort_by: 'name' }
          )
            .pipe(
              finalize(() => this.isLoading = false),
            )
        )
      ).subscribe(res => {
        if (res.status) {
          this.groups = res.data;
        }
      });
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.form.controls.groupId.setValue(event.option.value.id);
  }

  displayFn(data: any): string {
    return data ? data.name : data;
  }

  getDetail(id) {
    this.masterService.detail(id).subscribe(
      response => {
        if (response.status) {
          this.name = response.data.name;
          this.email = response.data.email;
          this.contact = response.data.contact;
          this.group = {
            id: response.data.group_id,
            name: response.data.group_name,
          };
          this.groupId = response.data.group_id;
          this.panNumber = response.data.pan_number;
          this.gstNumber = response.data.gst_number;
        }
      },
      err => {
        console.error(err);
      }
    );
  }

  setErrors() {
    this.formErrors = this.formService.validateForm(
      this.form,
      this.formErrors,
      false
    );
  }


  public onSubmit() {
    // mark all fields as touched
    this.formService.markFormGroupTouched(this.form);
    if (this.form.valid) {
      this.spinner.show();
      this.masterService.save(this.form.value, this.getId()).subscribe(
        response => {
          if (!response.status) {
            if (response.result) {
              response.result.forEach((element: { id: any; text: any; }) => {
                this.formErrors[`${element.id}`] = element.text;
              });
            }
          } else {
            this.form.reset();
            this.router.navigate(['/customers']);
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
