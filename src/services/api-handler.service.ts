import { Injectable } from '@angular/core';
import { ApiConfig } from '../utils/config';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RequestOptions, ResponseContentType } from '@angular/http';
import {Post} from "../app/models/posts.model";

declare const $: any;

@Injectable()
export class ApiHandlerService extends ApiConfig {
  public url = 'https://deezerdevs-deezer.p.rapidapi.com/artist/13468';

  constructor(private http: HttpClient) {
    super();
  }

  public get(path?) {
    const myPath = (path && path !== '') ? path : this.url;
    this.headers = { headers: this.setHeaders() };
    return this.http.get<Post[]>(`${myPath}`, this.headers);
  }
}
