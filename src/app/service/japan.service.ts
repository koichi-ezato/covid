import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JapanService extends ApiService {
  constructor(
    public http: HttpClient,
  ) {
    super(http);
    this.url += '?iso2=JP';
  }
}
