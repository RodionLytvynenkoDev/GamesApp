import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGamesComponent } from "./components/video-games/video-games.component";
import { ContactComponent } from "./components/contact/contact.component";

const routes: Routes = [
  { path: '', component: VideoGamesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: VideoGamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
