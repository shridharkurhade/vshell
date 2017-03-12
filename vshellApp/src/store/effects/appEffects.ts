import {Effect, Actions} from "@ngrx/effects";
import {PAGE_LOADING, appLoadedAction, FAVORITE_CHANGED} from "../actions/AppActions";
import {AppService} from "../../services/vshell-service.service";
import {Injectable} from "@angular/core";

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";


@Injectable()
export class AppEffect{

  constructor(private actions:Actions, private appService:AppService ){

  }

  @Effect() pageLoadingEffect$ = this.actions
    .ofType(PAGE_LOADING)
    .switchMap(action => this.appService.getApps(action.payload))
    .map(apps => new appLoadedAction(apps));


  @Effect() favChangedEffect$ = this.actions
    .ofType(FAVORITE_CHANGED)
    .switchMap(action => this.appService.updateApp(action.payload.app, action.payload.checked))
    .map(apps => new appLoadedAction(apps));

}
