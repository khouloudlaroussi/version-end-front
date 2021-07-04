import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modeles/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  getOnetache: any;
  constructor(private httpClient: HttpClient) { }
  adduser(user: User) {
    let param1 = new HttpParams;
    param1 = param1.set("nom", user.nom);
    param1 = param1.set("prenom", user.prenom);
    param1 = param1.set("cin", user.cin);
    param1 = param1.set("adress", user.adress);
    param1 = param1.set("tel", user.tel);
    param1 = param1.set("email", user.email);
    return this.httpClient.post('http://127.0.0.1/project_pfe/User/insert_user', param1);
  }

  getAllUser() {
    return this.httpClient.get("http://127.0.0.1/project_pfe/User/get_All_user");
  }
  getOneuser(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());

    return this.httpClient.get("http://127.0.0.1/project_pfe/User/get_one_user", { params: param1 });
  }
  updateuser(user: User) {
    let param1 = new HttpParams;

    param1 = param1.set("nom", user.nom);
    param1 = param1.set("prenom", user.prenom);
    param1 = param1.set("cin", user.cin);
    param1 = param1.set("adress", user.adress);
    param1 = param1.set("tel", user.tel);
    param1 = param1.set("email", user.email);
    param1 = param1.set("id", user.id_user);
    return this.httpClient.post('http://127.0.0.1/project_pfe/User/update_user', param1);
  }
  deleteuser(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set("id", id);
    param1 = param1.set("tabname", "user");
    param1 = param1.set("nomId", "id_user");
    param1 = param1.set("statut", "0");
    return this.httpClient.post("http://127.0.0.1/project_pfe/General/active_desctive_line_tab", param1);
  }
  getlogin(email: string, password: string) {
    let param1 = new HttpParams;
    param1 = param1.set('email', email.toString());
    param1 = param1.set('password', password.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/General/login", { params: param1 });
  }

}
