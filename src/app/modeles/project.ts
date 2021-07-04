export class Project {
  id_projet?: string;
  dure_project?: string;
  nom_project: string;
  date_fin_project: string;
  date_debut_project: string;
  description_projet: string;
  id_admine: string;
  etat?: string;
  statut?: string;
  constructor(nom_project: string, date_fin_project: string, date_debut_project: string,
    description_projet: string, id_admine: string,
    id_projet?: string, dure_project?: string, etat?: string, statut?: string) {
    this.nom_project = nom_project;
    this.date_fin_project = date_fin_project;
    this.date_debut_project = date_debut_project;
    this.description_projet = description_projet;
    this.id_admine = id_admine;
    this.id_projet = id_projet;
    this.dure_project = dure_project;
    this.etat = etat;
    this.statut = statut;

  }

}
