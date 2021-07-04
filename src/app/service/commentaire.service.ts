import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from '../modeles/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private httpClient: HttpClient) { }
  addcommentaire(commentaire: FormData) {

    return this.httpClient.post('http://127.0.0.1/project_pfe/Commentaire/insert_commentaire', commentaire);
  }
  getListCommentareBySuject(id: string) {

    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/Commentaire/getListComForSuject", { params: param1 });
  }

  jaimeCommentare(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id.toString());
    return this.httpClient.post("http://127.0.0.1/project_pfe/Commentaire/add_jaime", param1);

  }

  deletecommentaire(id: string) {
    let param1 = new HttpParams;
    param1 = param1.set("id", id);
    param1 = param1.set("tab", "commentaire");
    param1 = param1.set("nomId", "id_commentaire");
    return this.httpClient.post("http://127.0.0.1/project_pfe/General/delete_general", param1);
  }
}
