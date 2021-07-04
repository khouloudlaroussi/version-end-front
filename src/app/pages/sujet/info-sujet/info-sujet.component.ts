import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SujetService } from './../../../service/sujet.service';

@Component({
  selector: 'app-info-sujet',
  templateUrl: './info-sujet.component.html',
  styleUrls: ['./info-sujet.component.scss']
})
export class InfoSujetComponent implements OnInit {
  @Input() obj;
  @Input() titre;
  listTag: any[] = [];
  constructor(private route: Router, public activeModal: NgbActiveModal, private serviceSujetService: SujetService,) { }


  ngOnInit() {
    this.getListTagForUpdate();
  }

  async getListTagForUpdate() {

    await this.serviceSujetService.getListTagForSujet(this.obj.id_sujet).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listTag = msg;

        } else {
          this.listTag = [];
        }
      }, error: (err) => {
        this.listTag = [];
      }
    });
  }

  gotToCom() {
    this.activeModal.dismiss();
    this.route.navigate(['/dashboard-user/detaile-sujet', this.obj.id_sujet]);
  }


}
