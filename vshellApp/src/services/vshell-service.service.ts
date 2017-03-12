import {Observable} from "rxjs";
import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by casimiri on 3/8/2017.
 */

import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";


export interface App
{
  id:string;
  url:string;
  name:string;
  icon:string;
  isFavorite:boolean;
}

@Injectable()
export class AppService
{
  constructor(private http:Http){

  }

getApps(scope:string):Observable<App[]>{

    let headers = new Headers({"Content-Type": "application/json"});
    let url = "http://localhost:22152/api/values/";

  console.debug("inside get apps");
  return this.http.get(url, headers)
    .map(res => res.json());
}


updateApp(app:App, checked:boolean): Observable<App[]>{

  app.isFavorite = checked;

  let headers = new Headers({"Content-Type": "application/json"});
  let url = "http://localhost:22152/api/apps/"

  return this.http.put(url, JSON.stringify(app), {headers:headers})
    .mergeMap(() => this.getApps("all"))
    .map(res => res);
}

}
