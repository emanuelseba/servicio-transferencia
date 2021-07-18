import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevodestinatarioComponent } from './nuevodestinatario.component';

describe('NuevodestinatarioComponent', () => {
  let component: NuevodestinatarioComponent;
  let fixture: ComponentFixture<NuevodestinatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevodestinatarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevodestinatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
