import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.css'
})
export class ResultTableComponent {
  @Input({required: true}) listToDisplay!: Array<any>

  getKeys() {
    const listOfKeys: Array<string> = [];
    if (this.listToDisplay.length == 0)
      return [];
    for(const columnName in this.listToDisplay[0])
      {
        listOfKeys.push(this.prettify(columnName));
      }
    return listOfKeys;
  }
  
  getObjectValues<T extends object>(obj: T): Array<T[keyof T]> {
    return Object.values(obj);
  }

  prettify(sentence: string) {
    return (sentence[0].toUpperCase() + sentence.slice(1)).match(/[A-Z][a-z]+/g)!.join(" ");
  }

  formatValue(n : number) {
    if (n%1==0)
      return n;
    return Math.round(n * 100) / 100


  }
}
