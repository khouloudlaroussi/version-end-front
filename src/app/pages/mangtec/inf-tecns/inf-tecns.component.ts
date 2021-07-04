import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../modeles/user';
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-inf-tecns',
  templateUrl: './inf-tecns.component.html',
  styleUrls: ['./inf-tecns.component.scss']
})
export class InfTecnsComponent implements OnInit {
  @Input() titre;
  @Input() obj;
  user:User;
  constructor( public activeModal: NgbActiveModal, private userservice: UserService, private modalService: NgbModal) { }

   ngOnInit() {

  }
 
}
