import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './features/home/home.component';
import { BracketComponent } from './features/bracket/bracket.component';
import { AboutComponent } from './features/about/about.component';
import { TournamentBracketComponentComponent } from './features/bracket/tournament-bracket-component/tournament-bracket-component.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    BracketComponent,
    AboutComponent,
    TournamentBracketComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [TournamentBracketComponentComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
