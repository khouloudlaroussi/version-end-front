import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from '../modeles/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheserviceService {

  constructor(private httpClient: HttpClient) { }
  addtache(tache: Tache) {
    let param1 = new HttpParams;
    param1 = param1.set("id_projet", tache.id_project);
    param1 = param1.set("nom_tache", tache.nom_tache);
    param1 = param1.set("description_tache", tache.description_tache);
    param1 = param1.set("date_fin_tache",tache.date_fin_tache);
    param1 = param1.set("date_debut_tache",tache.date_debut_tache);

    return this.httpClient.post('http://127.0.0.1/project_pfe/Tache/insert_tache', param1);
  }

  getAllTacheBayProject(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Tache/get_All_tachebyproject", { params: param1 });
  }

  updateTache(tache: Tache) {
    let param1 = new HttpParams;
    param1 = param1.set("id", tache.id_tache.toString());
    param1 = param1.set("nom_tache", tache.nom_tache.toString());
    param1 = param1.set("date_fin_tache", tache.date_fin_tache);
    param1 = param1.set("date_debut_tache", tache.date_debut_tache);
    param1 = param1.set("description_tache", tache.description_tache.toString());
    return this.httpClient.post("http://127.0.0.1/project_pfe/Tache/update_tache", param1);
  }
  deleteTache(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set("id", id);
    return this.httpClient.post("http://127.0.0.1/project_pfe/Tache/delete_tache", param1);
  }
  getTacheNonAffecte(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Tache/getListAffectationNonAffecte", { params: param1 });
  }
}
