import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtistsComponent} from './artists/artists.component';
import {GiphyComponent} from './giphy/giphy.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'artist', component: ArtistsComponent},
  {path: 'giphy', component: GiphyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
