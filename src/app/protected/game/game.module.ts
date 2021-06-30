import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGameModule } from './create-game/create-game.module';
import { JoinGameModule } from './join-game/join-game.module';
import { PrepGameModule } from './prep-game/prep-game.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateGameModule,
    JoinGameModule,
    PrepGameModule
  ]
})
export class GameModule { }
