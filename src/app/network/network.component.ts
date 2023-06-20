import { Component } from '@angular/core';
import { SelectLocationComponent } from './select-location/select-location.component';
import { MatDialog } from '@angular/material/dialog';

interface option {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})


export class NetworkComponent {
  selectedRating!: number;
  
  constructor(public dialog: MatDialog) {}
    
SelectLocation(): void {
    const dialogRef = this.dialog.open(SelectLocationComponent, {
      width: '500 px',
      height: '350px',
      position: { left:'900px', top: '250px'} 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ratings = [
    { name: 'Item 1', rating: 4.5 },
    { name: 'Item 2', rating: 3.5 },
    { name: 'Item 3', rating: 2 },
  ];
  // ratings = [{number:1 ,rate:'1'},
  //   {number:2 ,rate:'2.5'}, 
  //   {number:3 ,rate:'3.5'}, 
  //   {number:4.5 ,rate:'4.5'}, 
  //   {number:5.5 ,rate:'5.5'}];
 
  
  // onRadioButtonChange(event) { 
  //   console.log("onRadioButtonChange()");
  //   console.log("event.source=" + event.source.id);
  //   console.log("event.value=" + event.value);
  // }

  // getStarRating(rating: number): string {
  //   let starRating = '';
  //   for (let i = 1; i <= 5; i++) {
  //     starRating += i <= rating ? '★' : '☆';
  //   }
  //   return rating % 1 === 0 ? rating.toString() : rating.toFixed(1);
  // }

  // getStarRating(rating: number): string {
  //   let starRating = '';
  //   for (let i = 1; i <= 5; i++) {
  //     starRating += i <= rating ? '★' : '☆';
  //   }
  
  //   if (rating % 1 !== 0) {
  //     // Check if the rating has a decimal value (e.g., 4.5)
  //     const decimalPart = rating % 1;
  //     starRating = starRating.slice(0, -1); // Remove the last star
  //     if (decimalPart >= 0.25 && decimalPart <= 0.75) {
  //       starRating += '⯪'; // Add a half-star symbol
  //     } else if (decimalPart > 0.75) {
  //       starRating += '★'; // Add a full star symbol
  //     } else {
  //       starRating += '☆'; // Add an empty star symbol
  //       // const solidStarSymbol = '\u2605'; // ★
  //     }
  //   }

  //   return starRating;
  // }

  getStarArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 === 0.5;

    const starArray = Array(fullStars).fill(1);
    if (hasHalfStar) {
      starArray.push(0.5);
    }

    return starArray;
  }
  


  selectRating(rating: number) {
    this.selectedRating = rating; // Update the selected rating
  }
  hideOption = false;
  onRatingSelected(rating: number): void {
    console.log('Selected rating:', rating);
  }
}

