import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDisciplinesComponent } from './my-disciplines.component';

describe('MyDisciplinesComponent', () => {
  let component: MyDisciplinesComponent;
  let fixture: ComponentFixture<MyDisciplinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDisciplinesComponent]
    });
    fixture = TestBed.createComponent(MyDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
