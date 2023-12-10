import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Match } from '../models/matches';
import { TeamsService } from 'src/app/shared/services/teams.service';
import { Player } from '../models/players';
import { MatchResult } from '../models/match-result';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tournament-bracket-component',
  templateUrl: './tournament-bracket-component.component.html',
  styleUrls: ['./tournament-bracket-component.component.scss']
})
export class TournamentBracketComponentComponent implements OnInit {
  @Input() treeData!: TreeNode[];
  @Input() matches!: Match[];
  @Input() editable!: boolean;
  @Output() scoreProvided: EventEmitter<any> = new EventEmitter();

  private matchResult: MatchResult = { matchId: -1, awayGoals: -1, awayId: -1, homeGoals: -1, homeId: -1, winnerPlayerId: -1 }

  public selectedNodeId = 0;
  public childNode!: TreeNode;

  constructor(private teamService: TeamsService, private http: HttpClient, private spinner: NgxSpinnerService) {
  }
  onNodeSelected(isNodeSelected: boolean, selectedNodeId: number): void {
    const nodeId = isNodeSelected ? null : +selectedNodeId;
  }
  ngOnInit(): void {
  }

  getRound8Matches() {
    const players = this.matches.filter(match => match.round == 'Round8').flatMap(match => [match.home, match.away])
    return this.matches.filter(match => match.round == 'Round8')
      .map(match => {
        match.home.side = 'home'
        match.home.matchId = match.id
        match.home.score = match.homeGoals
        match.away.side = 'away'
        match.away.matchId = match.id
        match.away.score = match.awayGoals
        return match;
      })
      .flatMap(match => [match.home, match.away])
  }

  getQuarterMatches() {
    return this.matches.filter(match => match.round == 'Quarter').map(match => {
      if(match.home){
        match.home.side = 'home'
        match.home.matchId = match.id
        match.home.score = match.homeGoals
      }
      if(match.away) {
        match.away.side = 'away'
        match.away.matchId = match.id
        match.away.score = match.awayGoals
      }
      return match;
    }).flatMap(match => [match.home, match.away])
  }

  getSemiMatches() {
    return this.matches.filter(match => match.round == 'Simi').map(match => {
      if(match.home){
        match.home.side = 'home'
        match.home.matchId = match.id
        match.home.score = match.homeGoals
      }
      if(match.away) {
        match.away.side = 'away'
        match.away.matchId = match.id
        match.away.score = match.awayGoals
      }
      return match;
    }).flatMap(match => [match.home, match.away])
  }

  getFinalMatches() {
    return this.matches.filter(match => match.round == 'Final').map(match => {
      if(match.home){
        match.home.side = 'home'
        match.home.matchId = match.id
        match.home.score = match.homeGoals
      }
      if(match.away) {
        match.away.side = 'away'
        match.away.matchId = match.id
        match.away.score = match.awayGoals
      }
      return match;
    }).flatMap(match => [match.home, match.away])
  }

  getWinner() {
    return this.matches.filter(match => match.round == 'Final').flatMap(match => [match.winnerPlayer])
  }

  onMenuClick(e: any): void {
    e.stopPropagation();
  }


  getTeamUrl(name: String) {
    return this.teamService.getTeamUrl(name);
  }

  focusOutFunction(player: Player, $event: any) {
    if (!(this.matchResult.matchId) && player.matchId != this.matchResult.matchId) {
      // display error message 
    }

    this.matchResult.matchId = player.matchId
    if (player.side == 'home') {
      this.matchResult.homeGoals = +$event.target.value;
      this.matchResult.homeId = player.id;
    } else {
      this.matchResult.awayGoals = +$event.target.value;
      this.matchResult.awayId = player.id;
    }

    if ((this.matchResult.homeGoals >= 0) && (this.matchResult.awayGoals >= 0)) {
      const winnerId = this.matchResult.homeGoals > this.matchResult.awayGoals ? this.matchResult.homeId : this.matchResult.awayId
      this.matchResult.winnerPlayerId = winnerId;
      this.spinner.show();
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      this.http.put<any>(environment.fc24Url + 'api/match', JSON.stringify(this.matchResult), { headers: headers }).subscribe(response => {
        this.matchResult = { matchId: -1, awayGoals: -1, awayId: -1, homeGoals: -1, homeId: -1, winnerPlayerId: -1 }
        this.scoreProvided.emit();
        // this.spinner.hide()
      })
    }
  }

  userAllowedToProvideScore(): boolean {
    return localStorage.getItem('username') == "a.alkhatib@dg-cash.com"
  }
}

export interface TreeNode {
  id: number;
  name: string;
  code: string;
  description: string;
  color: string;
  icon: string;
  parentId: number;
  areas: number;
  products: number[];
  children?: TreeNode[];
}