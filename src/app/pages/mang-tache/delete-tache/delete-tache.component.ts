import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TacheserviceService } from '../../../service/tacheservice.service';

@Component({
  selector: 'app-delete-tache',
  templateUrl: './delete-tache.component.html',
  styleUrls: ['./delete-tache.component.scss']
})
export class DeleteTacheComponent implements OnInit {
  @Input() titre;
  @Input() msg;
  @Input() id;
  constructor(private router: Router, public activeModal: NgbActiveModal, private tacheserviceService: TacheserviceService) { }

  ngOnInit() {
  }
  async confirem() {
    await this.tacheserviceService.deleteTache(this.id).subscribe(data => {
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


