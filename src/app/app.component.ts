import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamsDialogComponent } from './features/teams-dialog/teams-dialog.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fc24';
  selectedTeam?: number;
  isAuthView = false;
  imgUrl!: string | null
  constructor(public dialog: MatDialog, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAuthView = event.url === '/auth';
      }
    });
  }

  ngOnInit(): void {
    console.log(localStorage.getItem("imgUrl"))
    this.imgUrl = localStorage.getItem("imgUrl");
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TeamsDialogComponent, {
      width: '36%',
      height: '36%',
      data: { selectedTeam: this.selectedTeam }
    });

    dialogRef.afterClosed().subscribe(selectedTeam => {
      console.log(localStorage.getItem("imgUrl"))
      this.imgUrl = localStorage.getItem("imgUrl");
    });
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('imgUrl')
    localStorage.removeItem('username')
    localStorage.removeItem('teamId')
    this.router.navigate(['/auth'])
  }
}