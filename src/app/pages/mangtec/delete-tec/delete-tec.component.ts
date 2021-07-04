import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-delete-tec',
  templateUrl: './delete-tec.component.html',
  styleUrls: ['./delete-tec.component.scss']
})
export class DeleteTecComponent implements OnInit {
  @Input() titre;
  @Input() msg;
  @Input() id;
  constructor(private router: Router, public activeModal: NgbActiveModal, private userservice: UserService) { }

  ngOnInit() {
  }
  async confirem() {
    await this.userservice.deleteuser(this.id).subscribe(data => {
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
