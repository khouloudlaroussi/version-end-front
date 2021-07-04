import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../modeles/user';
import { UserService } from '../../../service/user.service';
import swal from 'sweetalert';
import { SharedServiceService } from '../../../service/shared-service.service';


@Component({
  selector: 'app-add-update-tec',
  templateUrl: './add-update-tec.component.html',
  styleUrls: ['./add-update-tec.component.scss']
})
export class AddUpdateTecComponent implements OnInit {
  @Input() addp;
  @Input() titre;
  @Input() obj: any;
  model: any = {};
  constructor(private router: Router, public activeModal: NgbActiveModal, private userservice: UserService, private modalService: NgbModal, private sharedservice: SharedServiceService) { }

  ngOnInit() {


    if (!this.addp) {
      this.model.nom = this.obj.nom;
      this.model.cin = this.obj.cin;
      this.model.prenom = this.obj.prenom;
      this.model.tel = this.obj.tel;
      this.model.email = this.obj.email;
      this.model.adress = this.obj.adress;
    }
    else {
      this.model = {}
    }
  }

  async add() {
    const user = new User(this.model.nom, this.model.cin, this.model.prenom,
      this.model.tel,
      this.model.email, this.model.adress);
    this.userservice.adduser(user).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;


        if (!error) {
          swal('Success', '', 'success')
          this.activeModal.dismiss();
          this.sharedservice.reloadComponent();
        }
        else {
          this.activeModal.dismiss();
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }

      }, error: (err) => {
        swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
      }
    })

  }
  update() {
    const user = new User(this.model.nom, this.model.cin, this.model.prenom,
      this.model.tel,
      this.model.email, this.model.adress, this.obj.id_user);
    this.userservice.updateuser(user).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;


        if (!error) {
          swal('Success', 'Register ', 'success')
          this.activeModal.dismiss();
          this.sharedservice.reloadComponent();
        }
        else {
          this.activeModal.dismiss();
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }

      }, error: (err) => {
        swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
      }
    })
  }


}



