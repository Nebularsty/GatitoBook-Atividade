import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});
  constructor(private serviceToken: TokenService) {
    if (this.serviceToken.possuiToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.serviceToken.retornaToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvarToken(token: string) {
    this.serviceToken.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.serviceToken.excluirToken();
    this.usuarioSubject.next({});
  }

  estaLogado() {
    return this.serviceToken.possuiToken();
  }
}
