import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ObjectGamesResponse } from '../models/object-games-response';
import { ObjectParticipantsResponse } from '../models/object-participants-response';
import { Game } from '../models/game';
import { Participant } from '../models/participant';

@Injectable()
export class GamesService {

  private apiUrlGames = environment.apiUrlGames;
  private apiUrlParticipants = environment.apiUrlParticipants;

  constructor(private readonly httpClient: HttpClient) { }

  public getGamesList(): Observable<Game[]> {
    return new Observable(observer => {
      this.httpClient.get<ObjectGamesResponse>(`${this.apiUrlGames}`).subscribe((response: ObjectGamesResponse) => {
        observer.next(this.gameListToCamelCase(response));
      });
    });
  }

  public getParticipantsList(): Observable<Participant[]> {
    return new Observable(observer => {
      this.httpClient.get<ObjectParticipantsResponse>(`${this.apiUrlParticipants}`).subscribe((response: ObjectParticipantsResponse) => {
        observer.next(this.participantsListToCamelCase(response));
      });
    });
  }

  private gameListToCamelCase(objectGamesResponse: ObjectGamesResponse): Game[] {
    let games: Game[] = [];
    const entries = Object.entries(objectGamesResponse);
    entries.forEach(listGameResponse => {
      listGameResponse[1].forEach(game => {
        const { winner_score, looser_id, looser_score } = game;
        games.push({
          winnerId: Number(listGameResponse[0]),
          winnerScore: winner_score,
          looserId: looser_id,
          looserScore: looser_score
        } as Game);
      })
    })
    return games;
  }

  private participantsListToCamelCase(objectParticipantsResponse: ObjectParticipantsResponse): Participant[] {
    const entries = Object.entries(objectParticipantsResponse);
    return entries.map(participantResponse => {
      return {
        id: participantResponse[1].id,
        firstName: participantResponse[1]["First Name"],
        lastName: participantResponse[1]["Last Name"],
        banned: participantResponse[1]["Banned"] ? true : false
     }     
    })
  }
}
