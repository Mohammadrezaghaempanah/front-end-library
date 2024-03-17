import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianshomeComponent } from './librarianshome.component';

describe('LibrarianshomeComponent', () => {
  let component: LibrarianshomeComponent;
  let fixture: ComponentFixture<LibrarianshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrarianshomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrarianshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
