import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sujet } from '../modeles/sujet';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private httpClient: HttpClient) { }
  //get les suject du user connecte 
  getMesSujet(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Sujet/getMySuject", { params: param1 });
  }
  //get tt les suject pou la party public 
  getAllSujet() {
    return this.httpClient.get("http://127.0.0.1/project_pfe/Sujet/get_suject_with_tag");
  }
  //pour affiche la liste des tag dans le detale popup detaye de suject propose propre a user connecte 
  getListTagForSujet(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Tag/get_tag_by_project", { params: param1 });
  }
  //get les suject pour une tache selectione 
  getListSujectByTacheEnCour(id: string, id_tache) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    param1 = param1.set('id_tache', id_tache.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Sujet/getMySuject_bay_tache_en_cour", { params: param1 });
  }


  //get list des tche pour detaile 
  getSujectbayIdForDetailes(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Sujet/getSuject_for_detailes", { params: param1 });
  }
 addSujet(suject: Sujet) {
    let param1 = new HttpParams;
    param1 = param1.set("titre", suject.titre);
    param1 = param1.set("description_sujet", suject.description_sujet);
    param1 = param1.set("id_user", suject.id_user);//tag
    param1 = param1.set("tag", suject.mot_cle);//id_tache
    param1 = param1.set("id_tache", suject.id_tache);//

    return this.httpClient.post('http://127.0.0.1/project_pfe/Sujet/insert_sujet', param1);

  }
  updateSuject(suject: Sujet) {
    let param1 = new HttpParams;
    param1 = param1.set("titre", suject.titre);
    param1 = param1.set("description_sujet", suject.description_sujet);
    param1 = param1.set("tag", suject.mot_cle);//id_tache
    param1 = param1.set("id", suject.id_sujet);//id_tache

    return this.httpClient.post('http://127.0.0.1/project_pfe/Sujet/update_sujet', param1);
  }
  deleteSuject(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set("id", id);
    param1 = param1.set("tab", "sujet");
    param1 = param1.set("nomId", "id_sujet ");
    return this.httpClient.post("http://127.0.0.1/project_pfe/General/delete_general", param1);
  }
}
