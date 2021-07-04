import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Affectation } from '../modeles/affectation';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {
  constructor(private httpClient: HttpClient) { }
  addaffectation(affectation: Affectation) {
    let param1 = new HttpParams;
    param1 = param1.set(" id_technician", affectation.id_technician.toString());
    param1 = param1.set("id_tache", affectation.id_tache.toString());

    return new Promise((resolve, reject) => {
      this.httpClient.post('http://127.0.0.1/project_pfe/Affecter/insert_affecter', param1)
        .forEach(data =>
          resolve(data)).
        catch((err) => {
          reject(err);
        });
    });
  }

  getAllaffectation(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Affecter/get_all_affectation", { params: param1 });
  }

  getOneaffectation(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());

    return this.httpClient.get("http://127.0.0.1/project_pfe/Affecter/get_one_affectation", { params: param1 });
  }
  updateaffectation(affectation: Affectation) {
    let param1 = new HttpParams;
    param1 = param1.set(" id_technician", affectation.id_technician);
    param1 = param1.set("id_tache", affectation.id_tache);
    return this.httpClient.post("http://127.0.0.1/project_pfe/Affecter/update_affecter", param1);
  }
  deleteaffectation(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set("id", id);
    return this.httpClient.post("http://127.0.0.1/project_pfe/Affecter/delete_affectation", param1);
  }

}
