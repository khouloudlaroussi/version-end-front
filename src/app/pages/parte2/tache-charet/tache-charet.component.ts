import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tache } from '../../../modeles/tache';
import { SharedServiceService } from './../../../service/shared-service.service';
import { PartTowService } from './../../../service/part-tow.service';

@Component({
  selector: 'app-tache-charet',
  templateUrl: './tache-charet.component.html',
  styleUrls: ['./tache-charet.component.scss']
})
export class TacheCharetComponent implements OnInit {
  id_project:string;
  listtache: Tache[] = []

  constructor(private activatedRoute: ActivatedRoute,
    private partTowservice:PartTowService,
    public sharedservice:SharedServiceService
    ) {
    this.id_project = this.activatedRoute.snapshot.paramMap.get('id_project');
  }
  ngOnInit() {
this.getAlltachebyproject();
  }
 async getAlltachebyproject() {
    this.listtache = [];
  await  this.partTowservice.getListTache(this.id_project).subscribe(data => {
      let resp: any;
      resp = data;
      let donne = resp.msg;
      if (resp.errorer) {
        donne = [];
      }
      this.listtache = donne;
    })
  }
}
