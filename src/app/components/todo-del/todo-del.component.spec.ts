import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDelComponent } from './todo-del.component';

describe('TodoDelComponent', () => {
  let component: TodoDelComponent;
  let fixture: ComponentFixture<TodoDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
