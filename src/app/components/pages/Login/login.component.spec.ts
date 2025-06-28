import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLoginComponent } from './login.component';

describe('BodyLoginComponent', () => {
  let component: BodyLoginComponent;
  let fixture: ComponentFixture<BodyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
