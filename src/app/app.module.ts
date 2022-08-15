import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { MaterialModule } from "./shared/ui/material/material.module";
import { FilterPipe } from "./components/video-games/pipes/filter.pipe";
import { SortPipe } from "./components/video-games/pipes/sort.pipe";
import { scoreFilterPipe } from "./components/video-games/pipes/score-filter.pipe";
import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent,
    ContactComponent,
    AppHeaderComponent,
    FilterPipe,
    SortPipe,
    scoreFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
