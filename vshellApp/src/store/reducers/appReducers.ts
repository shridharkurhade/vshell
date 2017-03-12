import {VshellState} from "../vshellState";
import {Action} from "@ngrx/store";
import {PAGE_LOADING, PAGE_LOADED} from "../actions/AppActions";


import * as _ from "lodash";


export function appReducer(state:VshellState, action:Action){

  switch (action.type){
    case PAGE_LOADED:
      const statePageLoaded = _.cloneDeep(state);
      statePageLoaded.allApps = action.payload;
      //statePageLoaded.favoriteApps = _.filter(action.payload, app => app.isFavorite==true);
      return statePageLoaded;


    default:
      return state;
  }

}
