import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../../../modeles/project';
import { PartTowService } from '../../../service/part-tow.service';
import { SharedServiceService } from '../../../service/shared-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-project-charet',
  templateUrl: './project-charet.component.html',
  styleUrls: ['./project-charet.component.scss'],
  providers: [DatePipe]
})
export class ProjectCharetComponent implements OnInit {
  listproject: any[] = []
  p: number;
  myDate:any = new Date();
  constructor(
    private datePipe: DatePipe,
    private sharedservice: SharedServiceService,
    private servivice: PartTowService) { 
      this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }

  ngOnInit() {
    this.sharedservice.checkUserRole(true);
    this.getallproject();
  }

  async getallproject() {
   await this.servivice.getlistproject().subscribe({next:(data)=>{

      let resp: any;
      resp = data;
      let donne = resp.msg;
      this.listproject = donne;

    },error:(err)=>{
      this.listproject = [];

    }})
      
      
      
      
      
      
  }
  


}
