import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  protected result: number = 0;

  constructor(private httpService: HttpService) {
    this.httpService.getNumber().subscribe((result) => {
      console.log(result);
      this.result = result;
    });
  }
}
