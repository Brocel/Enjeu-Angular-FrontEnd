import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    NgxBootstrapModule,
    FormsModule
  ]
})
export class SharedModule { }
