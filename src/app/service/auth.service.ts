import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User';
import { UserLogin } from '../Model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar (userlogin:UserLogin ) : Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userlogin)

  }

  cadastrar(userlogin:User ) : Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', User)

  }
}

