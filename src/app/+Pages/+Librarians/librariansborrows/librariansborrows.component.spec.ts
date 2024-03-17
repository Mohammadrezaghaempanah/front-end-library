import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariansborrowsComponent } from './librariansborrows.component';

describe('LibrariansborrowsComponent', () => {
  let component: LibrariansborrowsComponent;
  let fixture: ComponentFixture<LibrariansborrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariansborrowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrariansborrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
