import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartejs',
  templateUrl: './chartejs.component.html',
  styleUrls: ['./chartejs.component.scss']
})
export class ChartejsComponent implements OnInit {
  public piedata: Object[];
  public chartTitle:string;
  public chartLabel:Object;
  public legend:Object;
  public tooltipSettings:Object;
  ngOnInit(): void {
    this.chartTitle=" "
      this.piedata = [
        {name:'tech 0',value:37,text:'37%'},
        {name:'tech 1',value:17,text:'17%'},
        {name:'tech 3',value:19,text:'19%'},
        {name:'tech 2',value:4,text:'4%'},
        {name:'tech 4',value:11,text:'11%'},
        {name:'tech 5',value:12,text:'12%'},
      
      ];
      this.chartLabel={
        visible:true,
        position:'Inside',
        name:'text'
      }
      this.legend={
        visible:true,
        position : 'Bottom',
        height: '8%',
        width : '35%'
      }


  }
  
  }
