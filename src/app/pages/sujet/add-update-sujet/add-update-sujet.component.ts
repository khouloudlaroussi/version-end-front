import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sujet } from '../../../modeles/sujet';
import { SharedServiceService } from '../../../service/shared-service.service';
import swal from 'sweetalert';
import { SujetService } from './../../../service/sujet.service';
@Component({
  selector: 'app-add-update-sujet',
  templateUrl: './add-update-sujet.component.html',
  styleUrls: ['./add-update-sujet.component.scss']
})
export class AddUpdateSujetComponent implements OnInit {

  listsujet: Sujet[] = []
  tet: string = "";
  @Input() obj;
  @Input() addp;
  @Input() id_userAct = "-1";
  @Input() id_sujct;//id_tache
  @Input() id_tache;
  tage_ch = "";

  listTag: any[] = [];

  model: any = {};
  constructor(private router: Router, public activeModal: NgbActiveModal, private serviceSujetService: SujetService, private modalService: NgbModal, private sharedservice: SharedServiceService) { }

  ngOnInit() {


    if (!this.addp) {
      this.model.titre = this.obj.titre;
      this.model.description_sujet = this.obj.description_sujet;
      this.model.id_user = this.obj.id_user;

      this.tet = "Modification du chomp "
      this.getListTagForUpdate();

    }
    else {
      this.tet = "Remplir les champs"
      this.model = {};
    }

  }
  async addsujet() {
    const sujet = new Sujet(null, this.model.titre, null, this.model.description_sujet, this.id_userAct, this.model.mot_cle, this.id_tache);
    await this.serviceSujetService.addSujet(sujet).subscribe(
      {
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
        },
        error: (err) => {
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

        }
      }
    );


  }
  async getListTagForUpdate() {

    await this.serviceSujetService.getListTagForSujet(this.obj.id_sujet).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listTag = msg;

          msg.forEach((element) => {
            this.tage_ch += element.mot_cle + "**";
          })
          this.model.mot_cle = this.tage_ch.toString();

        } else {
          this.listTag = [];
        }
      }, error: (err) => {
        this.listTag = [];
      }
    });
  }
  async updatesuject() {

    const s = new Sujet(this.obj.id_sujet, this.model.titre, null, this.model.description_sujet, null, this.model.mot_cle);
    await this.serviceSujetService.updateSuject(s).subscribe({
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
        this.activeModal.dismiss();
        swal('Error', 'Quelque Chose Ne Fonctionne Pas 2', 'error')

      }
    })
  }
}







