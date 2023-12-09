export interface ObjectGamesResponse {
    1: GameResponse[],
    2: GameResponse[]
    3: GameResponse[]
    4: GameResponse[]
    5: GameResponse[]
    6: GameResponse[]
    7: GameResponse[]
    8: GameResponse[]
    9: GameResponse[]
    10: GameResponse[]
}

export interface GameResponse {
    looser_id: number,
    looser_score: number,
    winner_score: number,
}