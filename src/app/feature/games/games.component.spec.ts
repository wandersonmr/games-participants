import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import { GamesService } from '../../shared/service/games.service';
import { MatDialog } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs/observable/of';
import { Game } from '../../shared/models/game';
import { Participant } from '../../shared/models/participant';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;
  let gameServiceMock: jasmine.SpyObj<GamesService>;
  let matDialogMock: jasmine.SpyObj<MatDialog>;
  const participantsMock = [
    {
      id: 1,
      firstName: "wanderson",
      lastName: "oliveira",
      banned: false
    }
  ] as Participant[];

  const gameMock = [
    {
      winnerId: 1,
      winnerScore: 1,
      looserId: 1,
      looserScore: 1,
    }
  ] as Game[];

  beforeEach(async(() => {
    gameServiceMock = jasmine.createSpyObj<GamesService>('GameService', ['getGamesList', 'getParticipantsList']);
    matDialogMock = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [ GamesComponent, ModalDetailComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [BrowserAnimationsModule, CommonModule],
      providers: [
        {
          provide: GamesService,
          useValue: gameServiceMock
        },
        {
          provide: MatDialog,
          useValue: matDialogMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    gameServiceMock.getGamesList.and.returnValue(of(gameMock))
    gameServiceMock.getParticipantsList.and.returnValue(of([participantsMock]))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog', () => {
    component.participants = participantsMock;
    component.openDialog(1);
    expect(matDialogMock.open).toHaveBeenCalled();
  })

  it('should return participant first name and last name', () => {
    component.participants = participantsMock;
    const result = component.getParticipantNameById(1);
    expect(result).toEqual(`${participantsMock[0].firstName} ${participantsMock[0].lastName}`);
  })

  it('should select participant and currentSelectedId filled', () => {
    component.gamesByParticipant = gameMock;
    component.selectParticipant(1);
    expect(component.currentSelectedId).toEqual(1);
    expect(component.gamesByParticipant.length).toEqual(1);
  })

  it('should the number of games won', () => {
    const result = component.numberOfGamesWon(1);
    expect(result).toEqual(1);
  })
});
