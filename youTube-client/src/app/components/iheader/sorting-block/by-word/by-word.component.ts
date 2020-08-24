import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-word',
  templateUrl: './by-word.component.html',
  styleUrls: ['./by-word.component.scss']
})
export class ByWordComponent implements OnInit {
  active:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
