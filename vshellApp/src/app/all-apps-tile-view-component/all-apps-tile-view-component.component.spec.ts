import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppsTileViewComponentComponent } from './all-apps-tile-view-component.component';

describe('AllAppsTileViewComponentComponent', () => {
  let component: AllAppsTileViewComponentComponent;
  let fixture: ComponentFixture<AllAppsTileViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAppsTileViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAppsTileViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
