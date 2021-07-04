import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../../../service/project.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-delete-confirem',
  templateUrl: './delete-confirem.component.html',
  styleUrls: ['./delete-confirem.component.scss']
})
export class DeleteConfiremComponent implements OnInit {
  @Input() titre;
  @Input() msg;
  @Input() id;
  etat: string = "0";
  @Input() statut: boolean = false;

  constructor(private router: Router, public activeModal: NgbActiveModal, private serviceProject: ProjectService) { }


  ngOnInit() {
  }
  confirem() {
    if (this.statut) {
      this.etat = "1";
    }
    this.serviceProject.deleteProject(this.id, this.etat).subscribe(data => {
      let resp: any;
      resp = data;
      let donne: boolean;
      donne = resp.errorer;
      if (!donne) {
        this.activeModal.dismiss();
        this.closeReload();
        swal('Success', '', 'success')
      }
    })
  }
  closeReload() {
    const currentRoute = this.router.url;

    this.activeModal.dismiss();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
    });
  }

}