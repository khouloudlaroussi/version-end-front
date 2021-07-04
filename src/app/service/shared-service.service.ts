import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
dure:string="-1";
  constructor(private router: Router, private httpClient: HttpClient,) { }

  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
  getuserID() {
    return JSON.parse(localStorage.getItem('id_user'));
  }

  update_chomp(id, valouchomp, tabname, idname, nomchomp) {
    let param1 = new HttpParams;
    param1 = param1.set("id", id);
    param1 = param1.set("valouchomp", valouchomp);
    param1 = param1.set("tabname", tabname);
    param1 = param1.set("idname", idname);
    param1 = param1.set("nomchomp", nomchomp);
    return this.httpClient.post("http://127.0.0.1/project_pfe/General/update_chomp_tab", param1);
  }

  checkUserRole(admin: boolean) {
    if (admin == true) {
      if (localStorage.getItem("type") != "admin" || !(localStorage.getItem("type") != null))
        this.router.navigate(["/"]);
    }
    if (admin == false) {
      if (localStorage.getItem("type") != "user" || !(localStorage.getItem("type") != null))
        this.router.navigate(["/"]);
    }
  }

  dateDiff(a, b): boolean {
    if (a && b) {
      const dd = new Date(a) as any;
      const df = new Date(b) as any;
      return df < dd;
    } else {
      return false;
    }
  }
  //new fn 
/*
 async getDureFroProject(id_project, etat) {
    let param1 = new HttpParams;
    param1 = param1.set('id', id_project.toString());
    param1 = param1.set('etat', etat.toString());
    var res="-1";
   await  this.httpClient.get("http://127.0.0.1/project_pfe/Projet/getDureProject", { params: param1 }).subscribe({
      next:(data)=>{
        let resp: any;
        resp = data;
        let donne = resp.msg;
        let dure=donne[0].dure.toString();
        
        return dure;
        console.log(dure+"from serv ");
      },
      error:(err)=>{
        
      }}
      );
      
  }*/

  calculateDiff(dateSent) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())-Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
  }
  calculateDiffTow(dateOne: any, DateTow: any) {
    let currentDate = new Date(DateTow);
    let dateSent = new Date(dateOne);
    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));
  }


}
