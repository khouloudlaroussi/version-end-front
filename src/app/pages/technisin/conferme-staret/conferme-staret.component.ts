import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServiceService } from '../../../service/shared-service.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-conferme-staret',
  templateUrl: './conferme-staret.component.html',
  styleUrls: ['./conferme-staret.component.scss']
})
export class ConfermeStaretComponent implements OnInit {
  @Input() id;
  etat: string;
  constructor(public activeModal: NgbActiveModal, private sharedservice: SharedServiceService) { }
  ngOnInit() {

  }

  startTache() {
    this.sharedservice.update_chomp(this.id, "1", "tache", "id_tache", "etat_tache").subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          swal('Success', '', 'success')
          this.activeModal.dismiss();
          this.sharedservice.reloadComponent();
        } else {
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }
      },
      error: (err) => {
        swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
      }
    })
  }

}
