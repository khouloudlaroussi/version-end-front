export class User {
  id_user?: string;
  type?: string;
  nom: string;
  cin: string;
  prenom: string;
  tel: string;
  email: string;
  passwored?: string;
  adress: string;
  statut?: string;
  constructor(nom: string, cin: string, prenom: string, tel: string, email: string, adress: string, id_user?: string, passwored?: string, type?: string, statut?: string) {
    this.nom = nom;
    this.cin = cin;
    this.prenom = prenom;
    this.tel = tel;
    this.email = email;
    this.passwored = passwored;
    this.adress = adress;
    this.id_user = id_user;
    this.type = type;
    this.statut = statut;
  }
}