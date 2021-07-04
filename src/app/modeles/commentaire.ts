export class Commentaire {

  id_commentaire: string;
  id_sujet: string;
  description: string;
  id_user: string;
  linefiche: string;
  fiche?: File;
  score?: string;
  date?: string;




  constructor(id_sujet: string, description: string, id_user: string, linefiche?: string, fiche?: File, score?: string, id_commentaire?: string, date?: string) {
    this.id_commentaire = id_commentaire;
    this.id_sujet = id_sujet;
    this.description = description;
    this.score = score;
    this.id_user = id_user;
    this.date = date;
    this.fiche = fiche;
    this.linefiche = linefiche;
  }
}
