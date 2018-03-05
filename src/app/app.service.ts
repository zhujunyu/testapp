import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import * as Const from '../config/const';

@Injectable()
export class AppService {
  token: string;
  constructor(private http: Http) {
    this.token = localStorage.getItem('token');
  }

  public getData(machineId: any):Observable<any>{
    return this.http.get(Const.BACKEND_API_ROOT_URL + '/machine/'+ machineId +'/session/last')
      .map((res: Response) => {
        return res.json();
      });
  }
}
