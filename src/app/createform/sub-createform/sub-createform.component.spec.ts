import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCreateformComponent } from './sub-createform.component';

describe('SubCreateformComponent', () => {
  let component: SubCreateformComponent;
  let fixture: ComponentFixture<SubCreateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCreateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCreateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
