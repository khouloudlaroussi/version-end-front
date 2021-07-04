import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartTowService } from './../../../service/part-tow.service';

@Component({
  selector: 'app-detaile-tache-charet',
  templateUrl: './detaile-tache-charet.component.html',
  styleUrls: ['./detaile-tache-charet.component.scss']
})
export class DetaileTacheCharetComponent implements OnInit {
  id_tache: string;
  MayList: any;
  p:number;
  constructor(private servicepartTow: PartTowService,
    private activatedRoute: ActivatedRoute,) {
    this.id_tache = this.activatedRoute.snapshot.paramMap.get('id_tache');
  }

  ngOnInit() {
    this.getdetaliseBayTache(this.id_tache);
  }
  async getdetaliseBayTache(id: string) {
    await this.servicepartTow.get_detailse_tache(id).subscribe({
      next: (data) => {
        let resp: any;
        resp = data;
        let donne = resp.msg;
        this.MayList = donne;
      },
      error: (err) => {
        this.MayList = [];
      }
    })
  }

}
