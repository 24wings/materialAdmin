import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { routes } from '../../app.module';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  routes: {
    name: string, path: string, icon?: string
    children?: { name: string, path: string, icon?: string }[]
  }[] = [{
    name: '概览',
    path: 'admin',
    icon: "",
    children: [{ name: '用户', path: 'user' }]
  }, {
    name: '管理',
    path: 'admin/manage',
    children: [{ name: '管理用户', path: 'manage' }]
  }]
  constructor(public config: ConfigService) {
    if (!this.config.admin) {
      this.config.router.navigate(['/admin/login'])
    } else {
      this.config.router.navigate(['/admin/home'])
    }
  }

  ngOnInit() { }

  checkAdminLogin(): boolean { return false; }

  toggleToolbar() { }

}
