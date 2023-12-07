import { Component, OnInit } from '@angular/core';
import { TreeNode } from './tournament-bracket-component/tournament-bracket-component.component';
import { HttpClient } from '@angular/common/http';
import { Match } from './models/matches';
import { Player } from './models/players';
import { TeamsService } from 'src/app/shared/services/teams.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent implements OnInit {
  treeData!: TreeNode[];
  matches!: Match[];
  players!: Player[];
  
  constructor(private http: HttpClient, private teamService: TeamsService, private spinner: NgxSpinnerService) { }
  
  userAllowedToDraw(): boolean {
    console.log("localStorage.getItem('username')")
    console.log(localStorage.getItem('username'))
    return localStorage.getItem('username') == "a.alkhatib@dg-cash.com"
  }
  draw() {
    this.spinner.show()
    this.http.post<any>('http://localhost:8080/api/championship/draw', {"championshipId": 1}).subscribe(() => {
      this.spinner.hide()
    })
  }
  ngOnInit(): void {
    this.spinner.show()
    this.http.get<Player[]>('http://localhost:8080/api/player').subscribe(players => {
      this.players = players
    })
    this.http.get<Match[]>('http://localhost:8080/api/match').subscribe(matches => {
      this.matches = matches;
      this.spinner.hide()
    });
  }

  getTeamUrl(name: String) {
    return this.teamService.getTeamUrl(name);
  }
}

