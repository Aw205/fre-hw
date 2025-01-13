import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTmdbComponent } from './register-tmdb.component';

describe('RegisterTmdbComponent', () => {
  let component: RegisterTmdbComponent;
  let fixture: ComponentFixture<RegisterTmdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterTmdbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTmdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
