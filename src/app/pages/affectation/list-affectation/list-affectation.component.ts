import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../../modeles/project';
import { Tache } from '../../../modeles/tache';
import { ProjectService } from '../../../service/project.service';
import { Affectation } from '../../../modeles/affectation';
import { AffectationService } from '../../../service/affectation.service';
import { AddUpAffectationComponent } from '../add-up-affectation/add-up-affectation.component';
import { DeleteAffectationComponent } from '../delete-affectation/delete-affectation.component';
import swal from 'sweetalert';
import { SharedServiceService } from '../../../service/shared-service.service';
@Component({
  selector: 'app-list-affectation',
  templateUrl: './list-affectation.component.html',
  styleUrls: ['./list-affectation.component.scss']
})
export class ListAffectationComponent implements OnInit {
  listaffectation: Affectation[] = []
  listproject: Project[] = []
  p: number;
  id_projet: string = "-1";

  constructor(private sharedservice: SharedServiceService, private serviceproject: ProjectService, private modalService: NgbModal, private serviceaffectation: AffectationService) { }

  ngOnInit() {
    this.sharedservice.checkUserRole(true);
    this.getallproject();

  }
  open() {
    if (this.id_projet === '-1') {
      swal('Error', 'Selectioner un projet ', 'error')

    }
    else {
      const modalRef = this.modalService.open(AddUpAffectationComponent);
      modalRef.componentInstance.obj = '-1';
      modalRef.componentInstance.id_project = this.id_projet;
      modalRef.componentInstance.titre = 'Remplir les champs';
      modalRef.componentInstance.addp = true;
    }
  }
  async getallproject() {
    await this.serviceproject.getAllProject("0", "1").subscribe(data => {
      let resp: any;
      resp = data;
      let donne = resp.msg;
      this.listproject = donne;
    })
  }
  async getAllaffectation(id: string) {
    try {
      this.listaffectation = [];
      await this.serviceaffectation.getAllaffectation(id).subscribe(data => {
        let resp: any;
        resp = data;
        let donne = resp.msg;

        if (resp.errorer) {
          donne = [];
        } else
          this.listaffectation = donne;


      })
    } catch (err) {
      this.listaffectation = [];
    }
  }

  gteValue(id: string) {

    this.id_projet = id;
    this.getAllaffectation(id);

  }


  update(item) {
    const modalRef = this.modalService.open(AddUpAffectationComponent);
    modalRef.componentInstance.obj = item;
    modalRef.componentInstance.id_project = this.id_projet;
    modalRef.componentInstance.titre = 'Modifer une affectation';
    modalRef.componentInstance.addp = false;

  }
  deleteaffec(id: string) {
    const modalRef = this.modalService.open(DeleteAffectationComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.titre = 'supprition d\'une affectation';
    modalRef.componentInstance.msg = 'vous été sûr de supprimer cette élément ';

  }



}