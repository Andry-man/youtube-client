import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-settingg-button',
  templateUrl: './settingg-button.component.html',
  styleUrls: ['./settingg-button.component.scss']
})

export class SettinggButtonComponent  {
@Input() mynumber:boolean;
@Output() clickButton:EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  showSwich() {
    this.clickButton.emit(this.mynumber);
  }


}
