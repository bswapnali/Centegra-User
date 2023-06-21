import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.scss']
})
export class DaterangeComponent {

    rangeForm: FormGroup;
    selectedRange=null;
    constructor(private fb: FormBuilder) {
      this.rangeForm = this.fb.group({
        startDate: [new Date()],
        endDate: null
      });
    }

    onRangeSelected() {
      if (this.selectedRange === 'last7days') {
        const currentDate = this.rangeForm.controls['startDate'].value;
        const endDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
        this.rangeForm.controls['endDate'].setValue(endDate);
      
      } else if (this.selectedRange === 'last30days') {
        const currentDate = new Date();
        const endDate = new Date(currentDate.setDate(currentDate.getDate() + 29));
        this.rangeForm.controls['endDate'].setValue(endDate);
      } else {
        // Custom range or select date range option selected
        this.rangeForm.controls['startDate'].setValue('');
        this.rangeForm.controls['endDate'].setValue('');
      }
    }

  }
  

