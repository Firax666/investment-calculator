import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from "@angular/forms";
import { ResultTableComponent } from './result-table/result-table.component';
import { CalculatorService } from "./calculator/calculation-service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserInputComponent,
        ResultTableComponent,        
    ],
    bootstrap : [AppComponent],
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class AppModule {}