import { Component } from '@angular/core';

@Component({
  selector: 'app-divisible-number',
  templateUrl: './divisible-number.component.html',
  styleUrls: ['./divisible-number.component.scss']
})
export class DivisibleNumberComponent {
  array = Array.from(Array(50).keys())

  divisibleNumber = 1;

  divisible(selectedNumber: number){
    console.log(selectedNumber)
    this.divisibleNumber = selectedNumber;
  }
}
