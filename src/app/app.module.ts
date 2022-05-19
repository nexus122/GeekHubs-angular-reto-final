import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FormsModule } from '@angular/forms';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmsComponent,
    FilmComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    // Cargamos el HTTP Client Module para llamar a TMDB
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
