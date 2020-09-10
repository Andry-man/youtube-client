import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss']
})
export class LoginBlockComponent implements OnInit {
  userID: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
