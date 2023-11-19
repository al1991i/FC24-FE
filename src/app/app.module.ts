import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './features/home/home.component';
import { BracketComponent } from './features/bracket/bracket.component';
import { AboutComponent } from './features/about/about.component';
import { TournamentBracketComponentComponent } from './features/bracket/tournament-bracket-component/tournament-bracket-component.component';
import { TeamsDialogComponent } from './features/teams-dialog/teams-dialog.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    BracketComponent,
    AboutComponent,
    TournamentBracketComponentComponent,
    TeamsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports: [TournamentBracketComponentComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
