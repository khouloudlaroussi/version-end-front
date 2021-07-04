export class Tache {

  id_tache?: string;
  id_project?: string;
  nom_tache: string;
  date_fin_tache: string;
  date_debut_tache: string;
  description_tache: string;
  etat_tache?: string;
  nom_project?: string;
  dure?:string;
  constructor(nom_tache: string,  date_fin_tache:string , date_debut_tache:string, description_tache: string, id_tache?: string, id_project?: string, etat_tache?: string, nom_project?: string,dure?:string) {
    this.id_tache = id_tache;
    this.id_project = id_project;
    this.nom_tache = nom_tache;
    this.date_fin_tache=date_fin_tache;
    this.date_debut_tache=date_debut_tache;
    this.description_tache = description_tache;
    this.etat_tache = etat_tache;
    this.nom_project = nom_project;
    this.dure=dure;

  }
}
