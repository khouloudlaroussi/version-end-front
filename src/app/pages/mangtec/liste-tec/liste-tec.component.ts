import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../service/user.service';
import { User } from '../../../modeles/user';
import { AddUpdateTecComponent } from '../add-update-tec/add-update-tec.component';
import { DeleteTecComponent } from '../delete-tec/delete-tec.component';
import { InfTecnsComponent } from '../inf-tecns/inf-tecns.component';
import { SharedServiceService } from '../../../service/shared-service.service';


@Component({
  selector: 'app-liste-tec',
  templateUrl: './liste-tec.component.html',
  styleUrls: ['./liste-tec.component.scss']
})
export class ListeTecComponent implements OnInit {
  listuser: User[] = []
  constructor(private modalService: NgbModal,
    private sharedservice: SharedServiceService,
    private userservice: UserService) { }
  p: number;
  ngOnInit() {
    this.sharedservice.checkUserRole(true);

    this.getAlluser();
  }
  async getAlluser() {
    await this.userservice.getAllUser().subscribe({next:(data)=>{
      let res: any;
      res = data;
      let donne: any;
      donne = res.msg;
      let error = res.errorer;
      if (error) {
        this.listuser = [];
      } else
        this.listuser = donne;
    },error:(err)=>{
      this.listuser = [];
    }});

  }

  open() {

    const modalRef = this.modalService.open(AddUpdateTecComponent);
    modalRef.componentInstance.titre = 'Ajouter un utilisateur';
    modalRef.componentInstance.addp = true;
  }
  update(item) {
    const modalRef = this.modalService.open(AddUpdateTecComponent);
    modalRef.componentInstance.obj = item;
    modalRef.componentInstance.titre = 'Modifier un utilisateur ';
    modalRef.componentInstance.addp = false;
  }
  blouqueuser(id: string) {
    const modalRef = this.modalService.open(DeleteTecComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.titre = 'blocage  d\'un utilisateur';
    modalRef.componentInstance.msg = 'vous été sûr de bloquer cette élément';

  }
  info(item) {
    const modalRef = this.modalService.open(InfTecnsComponent);
    modalRef.componentInstance.obj = item;
    modalRef.componentInstance.titre = 'Information sur l\' utilisteur';

  }
}
