import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ILaunch } from '../../app/Models/ILaunch';

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

  getAllLaunches(params: any): Observable<ILaunch[]> {
    const endpointUrl = `${this.baseUrl}/launches/all`;
    
    const httpParams = Object.getOwnPropertyNames(params)
      .reduce((p,key) => p.set(key, params[key]), new HttpParams());

    return this.http.get<ILaunch[]>(endpointUrl, {params: httpParams});
  }

  getNextLaunch(): Observable<ILaunch> {
    const endpointUrl = `${this.baseUrl}/launches/next`;

    return this.http.get<ILaunch>(endpointUrl);
  }

  getNextLaunches(): Observable<ILaunch[]> {
    const endpointUrl = `${this.baseUrl}/launches/upcoming`;

    return this.http.get<ILaunch[]>(endpointUrl);
  }

  getPastLaunches(): Observable<ILaunch[]> {
    const endpointUrl = `${this.baseUrl}/launches`;

    return this.http.get<ILaunch[]>(endpointUrl);
  }

  getLaunchesFromRocket(params: any): Observable<ILaunch[]>{
    const endpointUrl = `${this.baseUrl}/launches/all`;
    
    const httpParams = Object.getOwnPropertyNames(params)
      .reduce((p,key) => p.set(key, params[key]), new HttpParams());

    return this.http.get<ILaunch[]>(endpointUrl, {params: httpParams});
  }

  getAllLaunchpads(): Observable<any> {
    const endpointUrl = `${this.baseUrl}/launchpads`;
    
    return this.http.get<any>(endpointUrl);
  }

  getLaunchpad(launchpadId: string): Observable<any> {
    const endpointUrl = `${this.baseUrl}/launchpads/${launchpadId}`;
    return this.http.get<any>(endpointUrl);
  }
  getAllRockets(): Observable<any[]> {
    const endpointUrl = `${this.baseUrl}/rockets`;

    return this.http.get<any[]>(endpointUrl);
  }
  getRocket(rocketId: string): Observable<any> {
    const endpointUrl = `${this.baseUrl}/rockets/${rocketId}`;
    
    return this.http.get<any>(endpointUrl);
  }

  getInfo(): Observable<any> {
    const endpointUrl = `${this.baseUrl}/info`;

    return this.http.get(endpointUrl);
  }

}
