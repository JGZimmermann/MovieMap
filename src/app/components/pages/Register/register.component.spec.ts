import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRegisterComponent } from './register.component';

describe('BodyRegisterComponent', () => {
  let component: BodyRegisterComponent;
  let fixture: ComponentFixture<BodyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
