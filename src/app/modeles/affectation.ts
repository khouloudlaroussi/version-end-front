export class Affectation {
  id_technician: string;
  id_affectation?: string;
  id_tache: string;

  nom?: string;
  prenom?: string;
  nom_tache?: string;
  etat_tache?: string;



  constructor(id_technician: string, id_tache: string, id_affectation?: string,
    nom?: string, prenom?: string, nom_tache?: string, etat_tache?: string) {


    this.id_technician = id_technician;
    this.id_affectation = id_affectation;
    this.id_tache = id_tache;
    this.nom = nom;
    this.prenom = prenom;
    this.nom_tache = nom_tache;
    this.etat_tache = etat_tache;


  }
}