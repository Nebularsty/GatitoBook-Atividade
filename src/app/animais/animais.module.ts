import { CartaoModule } from './../components/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { animalComponent } from './animal/animal.component';

@NgModule({
  declarations: [
    ListaAnimaisComponent,
    DetalheAnimalComponent,
    GradeFotosAnimaisComponent,
    animalComponent,
  ],
  imports: [CommonModule, AnimaisRoutingModule, CartaoModule],
})
export class AnimaisModule {}
