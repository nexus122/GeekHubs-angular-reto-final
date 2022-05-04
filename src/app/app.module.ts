import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmsComponent
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
