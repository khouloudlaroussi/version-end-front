import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../modeles/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }
  addproject(proj: Project) {
    let param1 = new HttpParams;
    param1 = param1.set("nom_project", proj.nom_project);
    param1 = param1.set("date_fin_project", proj.date_fin_project);
    param1 = param1.set("date_debut_project", proj.date_debut_project);
    param1 = param1.set("description_projet", proj.description_projet);
    param1 = param1.set("id_admine", proj.id_admine);
    return this.httpClient.post('http://127.0.0.1/project_pfe/Projet/insert_projet', param1);
  }

  getAllProject(etat, statut: string) {
    let param1 = new HttpParams;
    param1 = param1.set('etat', etat.toString());
    param1 = param1.set('statut', statut.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Projet/get_All_projet", { params: param1 });
  }

  getOneProject(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Projet/get_one_projet", { params: param1 });
  }
  updateProject(proj: Project) {
    let param1 = new HttpParams;
    param1 = param1.set("nom_project", proj.nom_project);
    param1 = param1.set("date_fin_project", proj.date_fin_project);
    param1 = param1.set("date_debut_project", proj.date_debut_project);
    param1 = param1.set("description_projet", proj.description_projet);
    param1 = param1.set("id_admine", proj.id_admine);
    param1 = param1.set("id", proj.id_projet);
    return this.httpClient.post("http://127.0.0.1/project_pfe/Projet/update_projet", param1);
  }
  deleteProject(id: string, statut: string) {
    let param1 = new HttpParams;
    param1 = param1.set("id", id);
    param1 = param1.set("tabname", "projet");
    param1 = param1.set("nomId", "id_projet");
    param1 = param1.set("statut", statut);
    return this.httpClient.post("http://127.0.0.1/project_pfe/General/active_desctive_line_tab", param1);
  }

}
