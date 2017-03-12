import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { App } from "../../services/vshell-service.service";
import { Store } from "@ngrx/store";
import { VshellState } from "../../store/vshellState";

@Component({
  selector: 'app-all-apps-tile-view-component',
  templateUrl: './all-apps-tile-view-component.component.html',
  styleUrls: ['./all-apps-tile-view-component.component.css']
})
export class AllAppsTileViewComponentComponent implements OnInit {

  allApps$:Observable<App[]>;

  constructor(private store:Store<VshellState>) {
    this.allApps$ = this.store.select(state => state.allApps);
  }

  ngOnInit() {
  }

}
