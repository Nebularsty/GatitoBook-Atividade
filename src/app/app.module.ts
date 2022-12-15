import { RodapeModule } from './components/rodape/rodape.module';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { MensagemModule } from './components/mensagem/mensagem.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { animalComponent } from './animais/animal/animal.component';

@NgModule({
  declarations: [AppComponent, animalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MensagemModule,
    CabecalhoModule,
    RodapeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
