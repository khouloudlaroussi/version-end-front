import { Component, OnInit } from '@angular/core';
import { PartTowService } from './../../../service/part-tow.service';
import { ProjectService } from '../../../service/project.service';
import { Project } from '../../../modeles/project';

@Component({
  selector: 'app-chartejs',
  templateUrl: './chartejs.component.html',
  styleUrls: ['./chartejs.component.scss']
})
export class ChartejsComponent implements OnInit {
  public piedata: Object[];
  public chartTitle: string;
  public chartLabel: Object;
  public legend: Object;
  data_chart: any;
  id_project: string;
  listproject: Project[] = []
  public tooltipSettings: Object;
  constructor(private servicepartTow: PartTowService, private serviceproject: ProjectService,
  ) { }
  ngOnInit(): void {
    this.getallproject();
    // this.getDataForChart("81");
   


  }


  async getDataForChart(id: string) {
    await this.servicepartTow.getDataForChartpie(id).subscribe(
      {
        next: (data) => {
          const donne: any = data;
          const msg = donne.msg;
          const error = donne.errorer;
          if (!error) {
            this.chartTitle = "  "
            this.piedata = msg;
            this.chartLabel = {
              visible: true,
              position: 'Inside',
              name: 'text'
            }
            this.legend = {
              visible: true,
              position: 'Bottom',
              height: '8%',
              width: '35%'
            }
          } else {
            this.data_chart = [];
          }
        },
        error: (err) => {
          this.data_chart = [];
        }
      });
  }

  gteValue(id: string) {
    this.id_project = id;
    this.getDataForChart(id);
   
  }
  getallproject() {
    this.serviceproject.getAllProject("0", "1").subscribe(data => {
      let resp: any;
      resp = data;
      let donne = resp.msg;
      this.listproject = donne;
    })
  }


}
