import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator} from './calculator'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
  /* let calculator  = new Calculator();
   let result = calculator.multiply(3,3);
   console.log(result===9);//test passed
   console.log(result!==12);//test passed

   let result2 = calculator.divide(6,2);
   console.log(result2===3);//test passed
   console.log(result2!==10);//test passed

   
   let result3 = calculator.divide(6,0);
   console.log(result3===null);//test passed*/

  }

  title = 'Lab1U3';
}
