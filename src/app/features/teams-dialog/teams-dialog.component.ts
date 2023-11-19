import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  selectedTeam: number;
}

export interface Team {
  id: number;
  name: string;
  url: string;
}

@Component({
  selector: 'app-teams-dialog',
  templateUrl: './teams-dialog.component.html',
  styleUrls: ['./teams-dialog.component.scss']
})
export class TeamsDialogComponent {

  selectedTeam = 2

  constructor(
    public dialogRef: MatDialogRef<TeamsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  teams: Team[]  = [
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/Manchester_City_FC.png'
    },
    {
      id: 2,
      name: 'Real Madrid',
      url: '../../../assets/images/arsenal.png'
    },
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/barcelona.png'
    },
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/bayern.png'
    },
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/chealse.png'
    },
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/inter.png'
    },  
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/juventus.png'
    },
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/leverpool.png'
    },
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/manchesterunited.png'
    },
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/psg.png'
    },
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/realmadrid.png'
    },
    {
      id: 1,
      name: 'Real Madrid',
      url: '../../../assets/images/acmilan.png'
    },  
  ]

}
