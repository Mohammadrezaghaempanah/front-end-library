import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicbooksComponent } from './publicbooks.component';

describe('PublicbooksComponent', () => {
  let component: PublicbooksComponent;
  let fixture: ComponentFixture<PublicbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicbooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
