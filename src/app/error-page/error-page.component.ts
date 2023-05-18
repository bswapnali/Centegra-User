import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit,OnDestroy {

  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    // this.errorMessage = Commonstorage.errorPageMessage;
  }
  ngOnDestroy(): void {
    // Commonstorage.errorPageMessage = '';
}
}
