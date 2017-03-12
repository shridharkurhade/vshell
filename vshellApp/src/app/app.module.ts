import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AllAppsComponent } from './all-apps/all-apps.component';
import {StoreModule} from "@ngrx/store";
import {VSHELL_APP_INITIAL_STATE} from "../store/vshellState";
import {appReducer} from "../store/reducers/appReducers";
import {AppService} from "../services/vshell-service.service";
import {EffectsModule} from "@ngrx/effects";
import {AppEffect} from "../store/effects/appEffects";
import { AllAppsTileViewComponentComponent } from './all-apps-tile-view-component/all-apps-tile-view-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AllAppsComponent,
    AllAppsTileViewComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(appReducer, VSHELL_APP_INITIAL_STATE),
    EffectsModule.run(AppEffect),
    MaterialModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
