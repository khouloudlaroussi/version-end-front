import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedServiceService } from '../../../service/shared-service.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-update-etat-tache',
  templateUrl: './update-etat-tache.component.html',
  styleUrls: ['./update-etat-tache.component.scss']
})
export class UpdateEtatTacheComponent implements OnInit {

  @Input() titre;
  @Input() et;
  @Input() id;
  @Input() tab_type;
  etat_tache_change: string = "-1";
  valouInpout;

  constructor(public activeModal: NgbActiveModal, private sharedservice: SharedServiceService) { }


  ngOnInit() {

  }
  onSubmit(f: NgForm) {
    if (this.etat_tache_change == "-1") {
      if (this.tab_type == '1') {
        this.etat_tache_change = '1';
      }
      else {
        this.etat_tache_change = '2';
      }


    }
    this.updateEtatTache(this.etat_tache_change);
  }
  onItemChange(item) {

    this.etat_tache_change = item;
    // ()
  }
  updateEtatTache(etat: string) {
    this.sharedservice.update_chomp(this.id, etat, "tache", "id_tache", "etat_tache").subscribe({
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
