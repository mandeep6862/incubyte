import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  inputString:any="";
  outputString:any;

  submit(){
    if(this.inputString == "" || this.inputString == null || this.inputString == undefined){
      this.outputString = 0;
    }
    let arr = this.inputString;
    if(arr.includes('n')){
      arr=arr.split('\n')[0];
      arr=arr.replace(/\\n/g, ",");
    }
    if(arr.includes(',')){
      let tmparr:any[] = arr.split(",");
      const sum = tmparr.reduce((accumulator, currentValue) => {
        return Number(accumulator) + Number(currentValue);
      }, 0);
      this.outputString = sum;
    }
    else{
      this.outputString = arr;
    }
    
  }

  onClickInput(){
    this.outputString = "";
  }

}
