import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySingleFilmeComponent } from './body-single-filme.component';

describe('BodySingleFilmeComponent', () => {
  let component: BodySingleFilmeComponent;
  let fixture: ComponentFixture<BodySingleFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodySingleFilmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodySingleFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
