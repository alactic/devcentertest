import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiHandlerService} from '../services/api-handler.service';
import { ArtistsComponent } from './artists/artists.component';
import {ArtistsService} from "./app-services/services/artists.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { GiphyComponent } from './giphy/giphy.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    GiphyComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiHandlerService, ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
