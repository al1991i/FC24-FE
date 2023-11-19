import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamsDialogComponent } from './features/teams-dialog/teams-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fc24';
  selectedTeam?: number;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TeamsDialogComponent, {
      width: '36%',
      height: '36%',
      data: { selectedTeam: this.selectedTeam }
    });

    dialogRef.afterClosed().subscribe(selectedTeam => {
      console.log('The dialog was closed');
      this.selectedTeam = selectedTeam;
    });
  }
}