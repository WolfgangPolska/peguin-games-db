import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [{ path: 'add-game', component: AddGameComponent }, { path: 'games', component: GamesComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }