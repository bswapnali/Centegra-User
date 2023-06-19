import { Component,Inject,inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logsignbtn',
  templateUrl: './logsignbtn.component.html',
  styleUrls: ['./logsignbtn.component.scss']
})
export class LogsignbtnComponent  {
  isSignup:boolean = false;
  isLogin:boolean=false;  
  selectedValue: string = 'isSignup'; 


constructor(public dialog: MatDialog,
  private dialogRef: MatDialogRef<LogsignbtnComponent>,@Inject(MAT_DIALOG_DATA) public currentdata: {IsSignup:Boolean,isLogin:boolean}){

}


async ngOnInit(): Promise<void> {debugger
  this.isSignup = this.currentdata.IsSignup as boolean;
  this.isLogin = this.currentdata.isLogin as boolean;
}

onSubmit1() {
  this.isSignup = true;
  this.isLogin = false;
}
  onSubmit2(){
    this.isSignup=false;
     this.isLogin=true;
   }


  
  
  
  
  
  
  
  
  
  
}



  
