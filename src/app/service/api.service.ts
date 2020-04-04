import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries';
  public headers = new HttpHeaders();

  constructor(
    public http: HttpClient,
  ) { }

  public getList(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response[0].timeseries)
      .catch(err => Promise.reject(err.error));
  }
}
