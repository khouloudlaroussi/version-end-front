import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../service/user.service';
import { Tache } from '../../../modeles/tache';
import { TacheserviceService } from '../../../service/tacheservice.service';
import { User } from '../../../modeles/user';
import { AffectationService } from '../../../service/affectation.service';
import { Affectation } from '../../../modeles/affectation';
import swal from 'sweetalert';
import { SharedServiceService } from '../../../service/shared-service.service';
@Component({
  selector: 'app-add-up-affectation',
  templateUrl: './add-up-affectation.component.html',
  styleUrls: ['./add-up-affectation.component.scss']
})
export class AddUpAffectationComponent implements OnInit {
  @Input() titre;
  @Input() obj: any = {};
  @Input() addp;
  @Input() id_project;

  model: any = {};
  listtache: Tache[] = [];
  listuser: User[] = [];
  listaffectation: Affectation[] = [];
  constructor(private shaaredservice: SharedServiceService, private serviceaffectation: AffectationService, private userservice: UserService, private router: Router, public activeModal: NgbActiveModal, private modalService: NgbModal, private tacheservice: TacheserviceService) { }

  ngOnInit() {

    this.getlistuser();

    if (this.addp) {
      this.getlisttache();
      this.model.id_user = "";
      this.model.id_tach = "";
    } else {


      this.model.id_user = this.obj.id_technician;
      this.model.id_tach = this.obj.id_tache;
    }

  }
  async addaffectation() {
    try {
      let list_id_user = this.model.id_user;
      let list_id_tache = this.model.id_tach;


      for (let index = 0; index < list_id_user.length; index++) {
        for (let i2 = 0; i2 < list_id_tache.length; i2++) {
          const affectation = new Affectation(list_id_user[index], list_id_tache[i2]);
          const { msg, erorer } = this.serviceaffectation.addaffectation(affectation) as any || [];
          if (!erorer) {
            this.activeModal.dismiss();
            swal('Success', 'Ajouter Resoute', 'success');
            this.shaaredservice.reloadComponent();
          } else {
            this.activeModal.dismiss();
            swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

          }
        }
      }
    } catch (error) {
      this.activeModal.dismiss();
      swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
    

    }
  }


  async getlisttache() {
    this.listtache = [];
    await this.tacheservice.getTacheNonAffecte(this.id_project).subscribe(data => {
      let resp: any;
      resp = data;
      let donne = resp.msg;
      if (resp.errorer) {
        donne = [];
      }
      this.listtache = donne;
    })
  }
  async getlistuser() {
    await this.userservice.getAllUser().subscribe(data => {
      let res: any;
      res = data;
      let donne: any;
      donne = res.msg;
      this.listuser = donne;
    })

  }


}
