import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './features/auth/auth.component';
import { HomeComponent } from './features/home/home.component';
import { BracketComponent } from './features/bracket/bracket.component';
import { AboutComponent } from './features/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    BracketComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
