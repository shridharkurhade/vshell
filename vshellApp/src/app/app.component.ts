import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {VshellState} from "../store/vshellState";
import {appLoadingAction} from "../store/actions/AppActions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private store:Store<VshellState>){
    this.store.dispatch(new appLoadingAction("all"));
  }
}
