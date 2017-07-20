import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {
  ip = 'http://wp8.youqulexiang.com';

  get admin() {
    return localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')) : false
  }
  set admin(obj) {
    localStorage.setItem('admin', JSON.stringify('obj'));

  }

  httpGet(url: String, args?: RequestOptionsArgs) {
    return this.http.get(this.ip + url, args).toPromise().then(rtn => rtn.json())
  }
  httpPost(url: string, body?: any, args?: RequestOptionsArgs) {
    return this.http.post(this.ip + url, body, args).toPromise().then(rtn => rtn.json());
  }
  httpPut(url: string, body?: any, args?: RequestOptionsArgs) {
    return this.http.put(this.ip + url, body, args).toPromise().then(rtn => rtn.json());
  }
  httpDelete(url: string, args?: RequestOptionsArgs) {
    return this.http.delete(this.ip + url, args).toPromise().then(rtn => rtn.json());
  }


  constructor(public http: Http, public router: Router, public route: ActivatedRoute) { }

}
