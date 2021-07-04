import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tache } from '../../../modeles/tache';
import { Project } from '../../../modeles/project';
import { ProjectService } from '../../../service/project.service';
import { AddUpdateTacheComponent } from '../add-update-tache/add-update-tache.component';
import { TacheserviceService } from '../../../service/tacheservice.service';
import { DeleteConfiremComponent } from '../../mangerProject/delete-confirem/delete-confirem.component';
import { InfoTacheComponent } from '../info-tache/info-tache.component';
import { DeleteTacheComponent } from '../delete-tache/delete-tache.component';
import swal from 'sweetalert';
import { SharedServiceService } from '../../../service/shared-service.service';
@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.scss']
})
export class ListTacheComponent implements OnInit {
  listproject: Project[] = []
  listtache: Tache[] = []
  commance: boolean;
  p: number;

  id_project: string = "-1";
  constructor(private sharedservice: SharedServiceService,
    private serviceproject: ProjectService,
    private modalService: NgbModal,
    private tacheservice: TacheserviceService) { }
  ngOnInit() {
    this.getallproject();
    this.sharedservice.checkUserRole(true);
  }
  gteValue(id: string) {
    this.id_project = id;

    this.getAlltachebyproject(id);
  }
  async open() {

    if (this.id_project == "-1") {

      swal('Error', 'Selectioner un projet ', 'error')

    }
    else
      await this.serviceproject.checkProject(this.id_project).subscribe({
        next: (data) => {
          const donne: any = data;
          const msg = donne.msg;
          const error = donne.errorer;
          if (!error) {
            swal('Attention', 'vous ne pouvez pas ajouter de tâches a ce projet car elle deja commance', 'warning')

          } else {
            const modalRef = this.modalService.open(AddUpdateTacheComponent);
            modalRef.componentInstance.id = this.id_project;//this is the id of project 
            modalRef.componentInstance.titre = 'Remplir les champs';//titre du popup
            modalRef.componentInstance.addp = true;//pour affiche le button add
          }
        }, error: (err) => {
          const modalRef = this.modalService.open(AddUpdateTacheComponent);
          modalRef.componentInstance.id = this.id_project;//this is the id of project 
          modalRef.componentInstance.titre = 'Remplir les champs';//titre du popup
          modalRef.componentInstance.addp = true;//pour affiche le button add
        }
      })
    {
    }

  }
  getallproject() {
    this.serviceproject.getAllProject("0", "1").subscribe(data => {
      let resp: any;
      resp = data;
      let donne = resp.msg;
      this.listproject = donne;
    })
  }
  getAlltachebyproject(id: string) {
    this.listtache = [];
    this.tacheservice.getAllTacheBayProject(id).subscribe(data => {
      let resp: any;
      resp = data;
      let donne = resp.msg;
      if (resp.errorer) {
        donne = [];
      }
      this.listtache = donne;
    })
  }
  update(item) {
    const modalRef = this.modalService.open(AddUpdateTacheComponent);
    modalRef.componentInstance.obj = item;
    modalRef.componentInstance.titre = 'Modifier une tache';
    modalRef.componentInstance.addp = false;
  }
  deletetache(id: string) {

    const modalRef = this.modalService.open(DeleteTacheComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.titre = 'supprition d\'une tache';
    modalRef.componentInstance.msg = 'vous été sûr de supprimer cette élément';

  }
  info(item) {
    const modalRef = this.modalService.open(InfoTacheComponent);
    modalRef.componentInstance.obj = item;
    modalRef.componentInstance.titre = 'Information sur tache';

  }

}
