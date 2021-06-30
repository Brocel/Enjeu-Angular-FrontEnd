import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

// Module to import ngx-bootstrap components
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports:[
    ModalModule
  ]
})
export class NgxBootstrapModule { }
