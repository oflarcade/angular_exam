import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncesComponentComponent } from './announces-component.component';

describe('AnnouncesComponentComponent', () => {
  let component: AnnouncesComponentComponent;
  let fixture: ComponentFixture<AnnouncesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
