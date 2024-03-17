import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminslibrariansComponent } from './adminslibrarians.component';

describe('AdminslibrariansComponent', () => {
  let component: AdminslibrariansComponent;
  let fixture: ComponentFixture<AdminslibrariansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminslibrariansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminslibrariansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
