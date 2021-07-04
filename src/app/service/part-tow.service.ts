import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartTowService {

  constructor(private httpClient: HttpClient) { }

  getlistproject() {
    return this.httpClient.get("http://127.0.0.1/project_pfe/Projet/project_charet");
  }


  get_detailse_tache(id:string) {

    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Sujet/get_list_detailse_for_tache",{params:param1});
  }


  getListTache(id:string) {

    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Tache/getChartTAche",{params:param1});
  }

  


}
