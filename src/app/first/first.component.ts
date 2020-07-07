import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/myservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
  //providers: [MyService]
})
export class FirstComponent implements OnInit {

  count: number;
  title:string='Title:First component';
  debugVal:boolean=false;
  constructor(private myService: MyService) {

  }

  ngOnInit() {
  }

  checkIn() {
    this.myService.authenticate();
    if (this.myService.login()) {

      this.count = this.myService.count;
      return "Login called";

    }

    return "Login not called";

  }
  checkOut() {

    this.count = this.myService.checkOut();
  }
  checkDebug(){
this.debugVal=true;
  }


}
