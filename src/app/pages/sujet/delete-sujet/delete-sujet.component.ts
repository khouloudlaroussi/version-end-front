import { Component, Input, OnInit } from '@angular/core';
import { SujetService } from './../../../service/sujet.service';
import { SharedServiceService } from './../../../service/shared-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';

@Component({
  selector: 'app-delete-sujet',
  templateUrl: './delete-sujet.component.html',
  styleUrls: ['./delete-sujet.component.scss']
})
export class DeleteSujetComponent implements OnInit {
  @Input() titre;
  @Input() msg;
  @Input() id;
  constructor(private sharedService: SharedServiceService, public activeModal: NgbActiveModal, private sujectService: SujetService) { }

  ngOnInit() {
  }
  confirem() {

    this.sujectService.deleteSuject(this.id).subscribe(data => {
      let resp: any;
      resp = data;
      let donne: boolean;
      donne = resp.errorer;
      if (!donne) {
        this.activeModal.dismiss();
        this.sharedService.reloadComponent();
        swal('Success', '', 'success')
      }
    })
  }
}
