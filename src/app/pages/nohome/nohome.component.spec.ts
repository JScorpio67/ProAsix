import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NohomeComponent } from './nohome.component';

describe('NohomeComponent', () => {
  let component: NohomeComponent;
  let fixture: ComponentFixture<NohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NohomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
