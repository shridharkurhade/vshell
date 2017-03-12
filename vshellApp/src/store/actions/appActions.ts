import {Action} from "@ngrx/store";
import {App} from "../../services/vshell-service.service";



export const PAGE_LOADING = "PAGE_LOADING";
export const PAGE_LOADED = "PAGE_LOADED";
export const FAVORITE_CHANGED = "FAVORITE_CHANGED";


export class appLoadingAction implements Action{
  type = PAGE_LOADING;

  constructor(public payload:string){}
}


export class appLoadedAction implements Action{
  type = PAGE_LOADED;

  constructor(public payload:App[]){}
}


export interface FavoriteChangedPayload{
  app:App;
  checked:boolean;
}
export class favoriteChangedAction implements Action{
  type = FAVORITE_CHANGED;

  constructor(public payload:FavoriteChangedPayload){}
}



