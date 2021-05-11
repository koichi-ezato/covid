import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldBriefService extends ApiService {
  constructor(
    public http: HttpClient,
  ) {
    super(http);
    this.url += 'brief';
  }
}
