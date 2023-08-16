import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getNumber() {
    return this.http.get<number>(
      'https://httpintegerdemo.free.beeceptor.com/integer'
    );
    // return from(
    //   CapacitorHttp.get({
    //     url: 'https://httpintegerdemo.free.beeceptor.com/integer',
    //   }).then((result) => {
    //     return result.data;
    //   })
    // );
  }
}
