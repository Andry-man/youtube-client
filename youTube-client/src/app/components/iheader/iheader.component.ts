import { Component } from '@angular/core';

@Component({
  selector: 'app-iheader',
  templateUrl: './iheader.component.html',
  styleUrls: ['./iheader.component.scss']
})
export class IheaderComponent  {
  public mynumber:boolean = false;
  public bools = this.mynumber;
  constructor() {
  }

}
