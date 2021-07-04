import { Component, OnInit } from '@angular/core';
import { Tache } from '../../../modeles/tache';
import { TacheserviceService } from '../../../service/tacheservice.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-tache',
  templateUrl: './info-tache.component.html',
  styleUrls: ['./info-tache.component.scss']
})
export class InfoTacheComponent implements OnInit {
  @Input() addp;
  @Input() titre;
  @Input() obj;
  tache: Tache;
  constructor(private router: Router, public activeModal: NgbActiveModal, private tacheserviceService: TacheserviceService, private modalService: NgbModal) { }

  ngOnInit() {
  }



}
