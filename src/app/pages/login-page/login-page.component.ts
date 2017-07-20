import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  admin = {
    username: '',
    password: ''
  };

  constructor(public config: ConfigService) { }

  ngOnInit() {
  }

  login() {
    this.config.admin = this.admin;
    this.config.router.navigate(['/admin/'])
  }

}
