import {App} from "../services/vshell-service.service";



export interface VshellState{

  allApps: App[];
  favoriteApps:App[];
}


export const VSHELL_APP_INITIAL_STATE:VshellState = {allApps: undefined, favoriteApps:undefined}
