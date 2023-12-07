import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

export interface DialogData {
  selectedTeam: number;
}

export interface Team {
  id: number;
  name: string;
  imgUrl: string;
}

@Component({
  selector: 'app-teams-dialog',
  templateUrl: './teams-dialog.component.html',
  styleUrls: ['./teams-dialog.component.scss']
})
export class TeamsDialogComponent implements OnInit {

  selectedTeam?: number;
  teams: Team[] = [];

  constructor(
    public dialogRef: MatDialogRef<TeamsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private http: HttpClient, private spinner: NgxSpinnerService
  ) {
    this.selectedTeam = localStorage.getItem('teamId') ? +localStorage.getItem('teamId')! : 1;
  }

  ngOnInit(): void {
    this.spinner.show()
    this.http.get<Team[]>('http://localhost:8080/api/team').subscribe(teams => {
      this.teams = teams
      this.spinner.hide()
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelectTeam(team: Team) {
    this.selectedTeam = team.id;
    localStorage.setItem("teamId", team.id + "");
    localStorage.setItem("imgUrl", team.imgUrl + "");
    const body = {
      username: localStorage.getItem('username'),
      teamId: team.id
    }
    this.spinner.show()
    this.http.put<any>('http://localhost:8080/api/player', body).subscribe(() => {
      this.spinner.hide()
    });
  }
}