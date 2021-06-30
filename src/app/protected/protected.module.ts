import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { FeaturesModule } from './features/features.module';
import { HomeModule } from './home/home.module';
import { CharacterModule } from './character/character.module';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { IngameModule } from './ingame/ingame.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    FeaturesModule,
    HomeModule,
    CharacterModule,
    UserModule,
    GameModule,
    IngameModule
  ]
})
export class ProtectedModule { }
