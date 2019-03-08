import {HttpHeaders} from '@angular/common/http';


/**
 *  Environment type configuration
 */


export class ApiConfig {

  protected headers = {headers: this.setHeaders()};
  protected authToken: any;

  constructor() {
    console.log('router :: ', window.location.hostname)
  }

  /**
   * This is used to Set HttpHeaders on before request
   * @returns {HttpHeaders}
   */
  protected setHeaders(): HttpHeaders {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-RapidAPI-Key': 'fc357288d8msh868712bc2accd8ap19c2e6jsn3522aa97fcb1'
    };

    return new HttpHeaders(headersConfig);
  }
}

