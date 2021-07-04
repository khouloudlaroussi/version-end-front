import { Component, OnInit } from '@angular/core';
import { Sujet } from './../../modeles/sujet';

import { SujetService } from './../../service/sujet.service';
import { SharedServiceService } from './../../service/shared-service.service';

@Component({
  selector: 'app-public-list-sujet',
  templateUrl: './public-list-sujet.component.html',
  styleUrls: ['./public-list-sujet.component.scss']
})
export class PublicListSujetComponent implements OnInit {
  listsujet: Sujet[] = []
  constructor(private sujetService: SujetService,
    private sharedservice: SharedServiceService,

  ) { }
  // etatCom:boolean=true;
  ngOnInit() {
    this.sharedservice.checkUserRole(false)
    this.getAllSujet();
  }

  async getAllSujet() {
    await this.sujetService.getAllSujet().subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listsujet = msg;


        } else {
          this.listsujet = [];
        }
      }, error: (err) => {
        this.listsujet = [];
      }
    })

  }

}
