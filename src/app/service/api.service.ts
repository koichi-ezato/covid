import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = 'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/';
  public headers = new HttpHeaders();

  constructor(
    public http: HttpClient,
  ) { }

  public getList(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => Promise.resolve(response))
      .catch(err => Promise.reject(err.error));
  }
}
