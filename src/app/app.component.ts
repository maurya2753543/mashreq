import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private testservice: TestService) {}

fetch() {
  this.testservice.fetch().subscribe(data => console.log(data));

}


}











































