import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SujetService } from './../../../service/sujet.service';
import { Sujet } from '../../../modeles/sujet';
import { AddUpdateSujetComponent } from '../add-update-sujet/add-update-sujet.component';
import swal from 'sweetalert';
import { SharedServiceService } from './../../../service/shared-service.service';
import { Tache } from '../../../modeles/tache';
import { ConsultationService } from './../../../service/consultation.service';
import { DeleteSujetComponent } from '../delete-sujet/delete-sujet.component';
import { InfoSujetComponent } from '../info-sujet/info-sujet.component';
@Component({
  selector: 'app-list-sujet',
  templateUrl: './list-sujet.component.html',
  styleUrls: ['./list-sujet.component.scss']
})
export class ListSujetComponent implements OnInit {
  listetache: Tache[] = [];
  listsujet: Sujet[] = []
  tache_id: string = "-1"
  p: number;
  iduserAct: string;
  constructor(
    private serviceSujetService: SujetService,
    private modalService: NgbModal,
    private sharedService: SharedServiceService,
    private serviceconsultation: ConsultationService,
    private route: Router) {
    this.iduserAct = this.sharedService.getuserID();
  }

  ngOnInit() {
    this.sharedService.checkUserRole(false)
    this.getallsujet();
    this.getMesAffection(this.iduserAct);
  }
  async getallsujet() {
    await this.serviceSujetService.getMesSujet(this.iduserAct).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listsujet = msg;
        } else {
          this.listsujet = [];
        }
      }, error: (err) => {
        this.listsujet = [];
      }
    });
  }


  async getMesAffection(id) {
    this.listetache = [];
    this.serviceconsultation.get_all_mes_affectation(id, "1").subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.error;
        if (!error) {
          this.listetache = msg;

        } else {
          this.listetache = [];
        }
      }, error: () => {
        this.listetache = [];
      }
    })
  }
  gteValue(id: string) {
    this.listsujet = [];
    this.tache_id = id;
    this.serviceSujetService.getListSujectByTacheEnCour(this.iduserAct, id).subscribe(
      {
        next: (data) => {
          this.listsujet = [];
          const donne: any = data;
          const msg = donne.msg;
          const error = donne.error;
          if (!error) {
            this.listsujet = msg;


          } else {
            this.listsujet = [];
          }
        },
        error: (err) => {
          this.listsujet = [];

        }
      })
  }
  open() {
    if (this.tache_id == "-1") {
      swal('Error', 'selection une tache ', 'warning')

    } else {
      const modalRef = this.modalService.open(AddUpdateSujetComponent);
      modalRef.componentInstance.id_userAct = this.iduserAct;//this is the id of project 
      modalRef.componentInstance.titre = "Remplir les champs";//titre du popup
      modalRef.componentInstance.id_tache = this.tache_id;//titre du popup
      modalRef.componentInstance.addp = true;//pour affiche le button add 
    }

  }
  update(item) {//obj
    const modalRef = this.modalService.open(AddUpdateSujetComponent);
    modalRef.componentInstance.id_userAct = this.iduserAct;//this is the id of project 
    modalRef.componentInstance.addp = false;
    modalRef.componentInstance.obj = item;//pour affiche le button add 



  }
  supprimer(id: string) {
    const modalRef = this.modalService.open(DeleteSujetComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.titre = 'supprimer un Sujet';
    modalRef.componentInstance.msg = 'vous été sûr de supprimer cette élément';
  }
  info(item) {
    const modalRef = this.modalService.open(InfoSujetComponent);
    modalRef.componentInstance.obj = item;
    modalRef.componentInstance.titre = 'info Sujet';
  }


  async termineOuvrireSuject(etat:string,id_sujet)
  {
    await this.sharedService.update_chomp(id_sujet,etat,"sujet","id_sujet","etat").subscribe({
      next:(data)=>{
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.sharedService.reloadComponent();
        swal('Success', '', 'success')
        }
        else {
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }

    },
    error:(err)=>{
      swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

    }})

  }
}
