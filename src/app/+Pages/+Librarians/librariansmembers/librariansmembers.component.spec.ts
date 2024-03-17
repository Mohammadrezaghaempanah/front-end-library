import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariansmembersComponent } from './librariansmembers.component';

describe('LibrariansmembersComponent', () => {
  let component: LibrariansmembersComponent;
  let fixture: ComponentFixture<LibrariansmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariansmembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrariansmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
