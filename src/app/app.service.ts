import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as Const from '../config/const';

@Injectable()
export class AppService {
  token: string;
  constructor(private http: HttpClient) {
    //this.token = localStorage.getItem('token');
  }

  getData(machineId: any) {
    return this.http.get(Const.BACKEND_API_ROOT_URL + '/machine/'+ machineId +'/session/last');
  }
}
