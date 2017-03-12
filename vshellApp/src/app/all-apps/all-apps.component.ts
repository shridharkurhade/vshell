import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {VshellState} from "../../store/vshellState";
import {Observable} from "rxjs";
import {App} from "../../services/vshell-service.service";
import {favoriteChangedAction} from "../../store/actions/AppActions";

@Component({
  selector: 'app-all-apps',
  templateUrl: './all-apps.component.html',
  styleUrls: ['./all-apps.component.css']
})
export class AllAppsComponent implements OnInit {


  allApps$:Observable<App[]>;

  constructor(private store:Store<VshellState>) {
    this.allApps$ = this.store.select(state => state.allApps);
  }

  ngOnInit() {
  }

  onClick(app:App, checked:boolean){
    this.store.dispatch(new favoriteChangedAction({app, checked}))
  }

}
