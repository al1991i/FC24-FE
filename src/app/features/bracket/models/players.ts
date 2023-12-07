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