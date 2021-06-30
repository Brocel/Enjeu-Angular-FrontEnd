import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CreateGameModule } from './create-game/create-game.module';
import { JoinGameModule } from './join-game/join-game.module';
import { PrepGameModule } from './prep-game/prep-game.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CreateGameModule,
    JoinGameModule,
    PrepGameModule
  ]
})
export class GameModule { }
