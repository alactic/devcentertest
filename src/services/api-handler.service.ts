import { Injectable } from '@angular/core';
import { ApiConfig } from '../utils/config';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from '@angular/http';

declare const $: any;

@Injectable()
export class ApiHandlerService extends ApiConfig {


  constructor(private http: HttpClient) {
    super();
  }

  public get(path: string) {
    this.headers = { headers: this.setHeaders() };
    return this.http.get(`${path}`, this.headers)
  }
}
