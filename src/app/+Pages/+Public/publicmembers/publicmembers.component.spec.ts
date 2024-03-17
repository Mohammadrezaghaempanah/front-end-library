import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicmembersComponent } from './publicmembers.component';

describe('PublicmembersComponent', () => {
  let component: PublicmembersComponent;
  let fixture: ComponentFixture<PublicmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicmembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
