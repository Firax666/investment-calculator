import { Component } from '@angular/core';
import { CalculatorService } from './calculator/calculation-service';
import { userInputData } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  calculationResultsList: Array<any> = []
  constructor(private calculator: CalculatorService) {}
  title = 'investment-calculator';

  getCalculationResults(userInput: userInputData) {
    this.calculationResultsList = this.calculator.calculateResult(userInput);
  }


}
