import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../../modeles/project';
import { ProjectService } from '../../../service/project.service';
import { DeleteConfiremComponent } from '../delete-confirem/delete-confirem.component';
import { InfoProjectComponent } from '../info-project/info-project.component';
import { MangProjectComponent } from '../mang-project/mang-project.component';
import { SharedServiceService } from '../../../service/shared-service.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {
  listproject: Project[] = []
  p: number;
  constructor(private modalService: NgbModal,
    private sharedservice: SharedServiceService,
    private serviceProject: ProjectService) { }

  ngOnInit() {
    this.sharedservice.checkUserRole(true);

    this.getallproject();
  }
  open() {
    const modalRef = this.modalService.open(MangProjectComponent);
    modalRef.componentInstance.id = '-1';
    modalRef.componentInstance.titre = 'Remplir les champs';
    modalRef.componentInstance.addp = true;
  }
  getallproject() {
    this.serviceProject.getAllProject("0", "1").subscribe(data => {
      let resp: any;
      resp = data;
      let donne = resp.msg;
      this.listproject = donne;
    })
  }
  update(item) {
    const modalRef = this.modalService.open(MangProjectComponent);
    modalRef.componentInstance.obj = item;
    modalRef.componentInstance.titre = 'Modifier un projet';
    modalRef.componentInstance.addp = false;

  }
  bloquerProj(id: string) {
    const modalRef = this.modalService.open(DeleteConfiremComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.titre = 'Annulation d\'un projet';
    modalRef.componentInstance.msg = 'vous été sûr d\'annuler cette élément ';
  }
  info(item) {
    const modalRef = this.modalService.open(InfoProjectComponent);
    modalRef.componentInstance.obj = item;
    modalRef.componentInstance.titre = 'info projet';

  }

}
