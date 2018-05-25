import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {
  private baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private http: HttpClient) {

  }

  getAllLaunches(params: any): Observable<any> {

    const endpointUrl = `${this.baseUrl}/launches/all`
    const httpParams  =Object.getOwnPropertyNames(params).reduce((p,key) => p.set(key, params[key]), new HttpParams());

    return this.http.get<Observable<any>>(endpointUrl, {params: httpParams});
  }

}
