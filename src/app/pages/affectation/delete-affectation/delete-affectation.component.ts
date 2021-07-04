import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AffectationService } from '../../../service/affectation.service';

@Component({
  selector: 'app-delete-affectation',
  templateUrl: './delete-affectation.component.html',
  styleUrls: ['./delete-affectation.component.scss']
})
export class DeleteAffectationComponent implements OnInit {
  @Input() titre;
  @Input() msg;
  @Input() id;
  constructor(private router: Router, public activeModal: NgbActiveModal, private serviceAffectation: AffectationService) { }


  ngOnInit() {
  }
  confirem() {
    this.serviceAffectation.deleteaffectation(this.id).subscribe(data => {
      let resp: any;
      resp = data;
      let donne: boolean;
      donne = resp.errorer;
      if (!donne) {
        this.activeModal.dismiss();
        this.closeReload();
      }
    })

  }
  closeReload() {
    const currentRoute = this.router.url;

    this.activeModal.dismiss();
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]); // navigate to same route
    });
  }

}