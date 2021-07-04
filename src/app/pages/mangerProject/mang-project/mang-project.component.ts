import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../../modeles/project';
import swal from 'sweetalert';
import { async } from '@angular/core/testing';
import { ProjectService } from '../../../service/project.service';
import { SharedServiceService } from '../../../service/shared-service.service';





@Component({
  selector: 'app-mang-project',
  templateUrl: './mang-project.component.html',
  styleUrls: ['./mang-project.component.scss']
})
export class MangProjectComponent implements OnInit {
  @Input() addp;
  @Input() titre;
  @Input() obj: any;
  model: any = {};



  constructor(private router: Router, public activeModal: NgbActiveModal, private serviceproject: ProjectService, private modalService: NgbModal, public sharedservice: SharedServiceService) { }

  ngOnInit() {
    if (!this.addp) {
      this.model.nomp = this.obj.nom_project;
      this.model.date_debut = this.obj.date_debut_project;
      this.model.date_fin = this.obj.date_fin_project;
      this.model.descrption = this.obj.description_projet;

    }
    else {
      this.model = {}
    }
  }

  add() {
    const proj = new Project(this.model.nomp, this.model.date_fin,
      this.model.date_debut, this.model.descrption, "2");
    this.serviceproject.addproject(proj).subscribe({
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





  async update() {

    const proj = new Project(this.model.nomp, this.model.date_fin,
      this.model.date_debut, this.model.descrption, "2", this.obj.id_projet);
    this.serviceproject.updateProject(proj).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;


        if (!error) {
          swal('Success', ' ', 'success')
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
