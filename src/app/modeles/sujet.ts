export class Sujet {
  id_sujet: string;
  titre: string;
  etat?: string;
  description_sujet?: string;
  id_user?: string;
  mot_cle?: string;
  id_tache?: string;

  constructor(id_sujet: string, titre: string, etat?: string, description_sujet?: string, id_user?: string, mot_cle?: string, id_tache?: string) {
    this.id_sujet = id_sujet;
    this.titre = titre;
    this.etat = etat;
    this.description_sujet = description_sujet;
    this.id_user = id_user;
    this.mot_cle = mot_cle;
    this.id_tache = id_tache;


  }
}
