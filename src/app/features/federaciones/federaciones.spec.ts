import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Federaciones } from './federaciones';

describe('Federaciones', () => {
  let component: Federaciones;
  let fixture: ComponentFixture<Federaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Federaciones],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Federaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render federation cards with stable section ids', () => {
    const fevesCard: HTMLElement | null = fixture.nativeElement.querySelector('#feves');

    expect(fevesCard).not.toBeNull();
  });

  it('should render RPVS membership labels', () => {
    const cards: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.federation-card');

    expect(cards.length).toBe(3);
    expect(fixture.nativeElement.textContent).toContain('Federación miembro de RPVS');
  });
});
