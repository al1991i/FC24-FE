import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentBracketComponentComponent } from './tournament-bracket-component.component';

describe('TournamentBracketComponentComponent', () => {
  let component: TournamentBracketComponentComponent;
  let fixture: ComponentFixture<TournamentBracketComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentBracketComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentBracketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
