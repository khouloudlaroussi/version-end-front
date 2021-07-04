import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tache } from '../../../modeles/tache';
import { TacheserviceService } from '../../../service/tacheservice.service';
import swal from 'sweetalert';
import { SharedServiceService } from '../../../service/shared-service.service';

@Component({
  selector: 'app-add-update-tache',
  templateUrl: './add-update-tache.component.html',
  styleUrls: ['./add-update-tache.component.scss']
})
export class AddUpdateTacheComponent implements OnInit {
  listtache: Tache[] = []
  @Input() titre;
  @Input() obj;
  @Input() addp;
  @Input() id;

  model: any = {};
  constructor(private router: Router, public activeModal: NgbActiveModal, private tacheserviceService: TacheserviceService, private modalService: NgbModal, private sharedservice: SharedServiceService) { }

  ngOnInit() {
    if (!this.addp) {
      this.model.nom_tache = this.obj.nom_tache;
      this.model.descrption = this.obj.description_tache;
      this.model.date_debut=this.obj.date_debut_tache;
      this.model.date_fin=this.obj.date_fin_tache;
    }
    else {
      this.model = {};
    }

  }


  addtache() {

    const tache = new Tache(this.model.nom_tache,this.model.date_fin,this.model.date_debut, this.model.descrption, null, this.id);
    this.tacheserviceService.addtache(tache).subscribe({
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
  async updateTache() {
    const tache = new Tache(this.model.date_debut,this.model.date_fin,this.model.nom_tache ,this.model.descrption, this.obj.id_tache)
    this.tacheserviceService.updateTache(tache).subscribe({
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


}







