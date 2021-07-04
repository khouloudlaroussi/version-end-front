import { Component, NgModule, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../../service/user.service";
import swal from 'sweetalert';


@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {

  // Form Control
  loginForm = new FormGroup({
    email: new FormControl("", [
      Validators.required,//email obligtoure 
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),// emailele chane de carcter || number || caracter spicoub + @ + charcter number .-+ .+charchrter ya number 
    ]),
    password: new FormControl(
      "",
      Validators.required 
    ),
  });

  constructor(private route: Router, private userservice: UserService,) { }

  ngOnInit() {
    const user_Role = localStorage.getItem("type");
    if (user_Role == 'admin') {
      this.route.navigate(["/dashboard"]);
    }
    if (user_Role == 'user') {

      this.route.navigate(["/dashboard-user"]);
    }

  }

  async onSignin(email: string, password: string) {

    this.userservice.getlogin(email, password).subscribe((data) => {
      const donne: any = data;
      const err = donne.error;
      const mayUser = donne.msg;
      if (!err) {
        if (mayUser['type'] == 1) {
          const nom_prenom = (donne.msg.nom + " " + donne.msg.prenom).toString();
          localStorage.setItem('id_user', JSON.stringify(donne.msg.id_user));
          localStorage.setItem('type', "admin");
          localStorage.setItem('nomuser', nom_prenom);

          this.route.navigate(['/dashboard']);
        }

        else {
          const nom_prenom = JSON.stringify(donne.msg.nom + " " + donne.msg.prenom);
          localStorage.setItem('id_user', JSON.stringify(donne.msg.id_user));
          localStorage.setItem('type', "user");
          localStorage.setItem('nomuser', nom_prenom);

          this.route.navigate(['/dashboard-user'])

        }
      } else {
        swal('warning', 'Vérifier votre Émail et/ou votre mot de passe', 'warning')
      }
    });
  }
}
