import { Injectable } from "@angular/core";
import { userInputData } from "../user-input/user-input.component";

@Injectable({providedIn: "root"})
export class CalculatorService {

  calculateResult(userInput: userInputData) {
    const annualData = [];
    let investmentValue = userInput.initialInvestment; 
    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInput.returnRate / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueAtETheEndOfYear: investmentValue,
        annualInvestment: userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
      });
    }
    console.log(annualData);
    return annualData;
  }
}