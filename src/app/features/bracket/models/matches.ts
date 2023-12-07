export interface Match {
    id: number
    home: Player
    away: Player
    winnerPlayer: Player
    homeGoals: number
    awayGoals: number
    matchDay: number
    round: string
    championship: Championship
}

export interface Player {
    id: number
    fullName: string
    imgUrl: string
    team: Team
    side: string
    matchId: number
    score: number
}

export interface Team {
    id: number
    name: string
    imgUrl: string
}


export interface Championship {
    id: number
    name: string
    prizeUrl: string
}