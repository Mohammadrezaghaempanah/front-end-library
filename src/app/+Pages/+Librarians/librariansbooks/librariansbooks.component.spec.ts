import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariansbooksComponent } from './librariansbooks.component';

describe('LibrariansbooksComponent', () => {
  let component: LibrariansbooksComponent;
  let fixture: ComponentFixture<LibrariansbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariansbooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrariansbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
