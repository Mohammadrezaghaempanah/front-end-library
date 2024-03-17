import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshomeComponent } from './adminshome.component';

describe('AdminshomeComponent', () => {
  let component: AdminshomeComponent;
  let fixture: ComponentFixture<AdminshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminshomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
