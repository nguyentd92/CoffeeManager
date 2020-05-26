import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { BillState, BillEntity } from 'src/app/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-upsert-bill',
  templateUrl: './upsert-bill.component.html',
  styleUrls: ['./upsert-bill.component.sass'],
})
export class UpsertBillComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private billStore: Store<BillState>) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      tableId: [null, [Validators.required]],
      startTime: [null, [Validators.required]],
      userPhone: [null, [Validators.required]],
      discoundId: [null, [Validators.required, this.confirmationValidator]],
      discountValue: [null, [Validators.required]],
      orderItems: [null, [Validators.required]],
      subTotal: [null, [Validators.required]],
      tax: [0],
      total: [0],
      counterId: [0],
      billDate: [new Date()]
    });
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(event) {}

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  update() {
    const bill: BillEntity = null
  }
}
