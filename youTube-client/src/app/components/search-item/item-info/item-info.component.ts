import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {
  swichButton:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  moreInfoCard(){
  this.swichButton = true;
  console.log(this.swichButton);
  }
}
