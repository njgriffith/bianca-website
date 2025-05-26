import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayDownComponent } from './lay-down.component';

describe('LayDownComponent', () => {
  let component: LayDownComponent;
  let fixture: ComponentFixture<LayDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
