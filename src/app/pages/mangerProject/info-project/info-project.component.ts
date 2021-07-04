import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-project',
  templateUrl: './info-project.component.html',
  styleUrls: ['./info-project.component.scss']
})
export class InfoProjectComponent implements OnInit {
  @Input() obj;
  @Input() titre;

  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit() {
  }

}
