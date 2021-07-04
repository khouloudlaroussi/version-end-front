import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentaireService } from './../../service/commentaire.service';


@Component({
  selector: 'app-detaile-media',
  templateUrl: './detaile-media.component.html',
  styleUrls: ['./detaile-media.component.scss']
})
export class DetaileMediaComponent implements OnInit {
  @Input() obj;
  @Input() type: string;

  constructor(public activeModal: NgbActiveModal,
    private commentaireserv: CommentaireService,
  ) { }

  ngOnInit() {
    this.type = this.type.toUpperCase()

  }
  addJame(id_commentaire: string) {
    this.commentaireserv.jaimeCommentare(id_commentaire).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {

        }

      }, error: (err) => { }
    })
  }
}
