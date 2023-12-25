import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games.component';
import { GamescardsComponent } from './gamescards/gamescards.component';
import { CardComponent } from './gamescards/card/card.component';



@NgModule({
  declarations: [
    GameComponent,
    GamesComponent,
    GamescardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    GameComponent,
    GamesComponent
  ]
})
export class GamesModule { }
