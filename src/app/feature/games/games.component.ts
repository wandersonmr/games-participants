import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../shared/service/games.service';
import { Game } from '../../shared/models/game';
import { Participant } from '../../shared/models/participant';
import { MatDialog } from '@angular/material';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { Detail } from '../../shared/models/detail';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public gamesByParticipant: Game[] = [];
  public participants: Participant[] = [];
  private games: Game[] = [];
  public currentSelectedId: number;

  constructor(private readonly gameService: GamesService, private readonly dialog: MatDialog) { }

  ngOnInit() {
    this.getGameList();
    this.getParticipantsList();
  }

  public selectParticipant(participantId: number): void {
    this.currentSelectedId = participantId;
    this.gamesByParticipant = this.games.filter(game => game.winnerId === participantId ||  game.looserId === participantId);
  }

  public numberOfGamesWon(participantId: number): number {
    return this.games.filter(game => game.winnerId === participantId).length;
  }

  public numberOfGamesPlayed(participantId: number): number {
    return this.numberOfGamesLost(participantId) + this.numberOfGamesWon(participantId);
  }
  
  public getParticipantNameById(participantId: number): string {
    const participant: Participant = this.participants.find(participant => participant.id === participantId); 
    return `${participant.firstName} ${participant.lastName}`
  }

  public openDialog(id: number): void {
    const detail: Detail = {
      name: this.getParticipantNameById(id),
      playedWon: `${this.numberOfGamesPlayed(id)}/${this.numberOfGamesWon(id)}`,
      picture: 'https://img.freepik.com/psd-gratuitas/ilustracao-de-renderizacao-3d-isolada-do-icone-do-google_47987-9777.jpg?w=2000'
    }
    this.dialog.open(ModalDetailComponent, {
      panelClass: 'custon-dialog',
      data: detail
    })
  }
  
  private numberOfGamesLost(participantId: number): number {
    return this.games.filter(game => game.looserId === participantId).length;
  }

  private getGameList(): void {
    this.gameService.getGamesList().subscribe((result: Game[] ) => {
      this.games = result;
    });
  }

  private getParticipantsList(): void {
    this.gameService.getParticipantsList().subscribe((result: Participant[]) => {
      this.participants = result;
    });
  }
}
