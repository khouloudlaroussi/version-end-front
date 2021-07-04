import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private httpClient: HttpClient) { }

  get_all_mes_affectation(id: string, etat_tache: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    param1 = param1.set('etat_tache', etat_tache.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Affecter/get_all_mes_affectation", { params: param1 });
  }

}
