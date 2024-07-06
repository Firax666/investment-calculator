import { Component, EventEmitter, Output } from '@angular/core';

export type userInputData = {
  initialInvestment: number;
  annualInvestment: number;
  returnRate : number;
  duration : number;
}

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment: string = "0.00";
  annualInvestment: string = "0.00";
  returnRate : string = "0.00";
  duration : string = "1";
  @Output() userInput = new EventEmitter<userInputData>()

  calculate() {
    console.log("xd")
    this.userInput.emit({
      initialInvestment : parseFloat(this.initialInvestment),
      annualInvestment : parseFloat(this.annualInvestment),
      returnRate : parseFloat(this.returnRate),
      duration : parseInt(this.duration),
    });
  }
}
