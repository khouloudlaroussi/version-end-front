import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireService } from './../../service/commentaire.service';
import { SharedServiceService } from './../../service/shared-service.service';
import { SujetService } from './../../service/sujet.service';
import swal from 'sweetalert';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetaileMediaComponent } from '../detaile-media/detaile-media.component';

@Component({
  selector: 'app-public-detail-sujet',
  templateUrl: './public-detail-sujet.component.html',
  styleUrls: ['./public-detail-sujet.component.scss']
})
export class PublicDetailSujetComponent implements OnInit {
  actifid: string;
  id_user_connecte: string;
  mySuject: any;
  showCom = true;
  data: FormData;
  file: File;
  listcom: any[] = []
  commentaire: string;
  etatCom: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serviceSuject: SujetService,
    private sharedService: SharedServiceService,
    private commentaireserv: CommentaireService,
    private modalService: NgbModal,
  ) {
    this.actifid = this.route.snapshot.paramMap.get('id_suject');
    this.data = new FormData();
    this.id_user_connecte = this.sharedService.getuserID();


  }

  ngOnInit() {
    this.sharedService.checkUserRole(false);
    this.getSujet();
    //  this.getListCom();

  }
  etatcom() {
    this.etatCom = !this.etatCom;
  }
  async getSujet() {
    await this.serviceSuject.getSujectbayIdForDetailes(this.actifid).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.mySuject = msg[0];


        } else {
          this.mySuject = {};
        }
      }, error: (err) => {
        this.mySuject = {};

      }
    })
  }
  async addCommetare() {
  
    this.data.append("file", this.file)
    this.data.append("id_sujet", this.mySuject.id_sujet)
    this.data.append("description", this.commentaire)
    this.data.append("id_user", this.sharedService.getuserID())


    await this.commentaireserv.addcommentaire(this.data).subscribe(
      {
        next: (data) => {
          swal('Success', '', 'success')
          this.sharedService.reloadComponent();
        },
        error: (err) => {
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')

        }
      });
  }
  async getListCom() {
    this.showCom = !this.showCom;
    await this.commentaireserv.getListCommentareBySuject(this.mySuject.id_sujet).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {
          this.listcom = msg;


        } else {
          this.listcom = [];
        }

      }, error: (err) => {
        this.listcom = [];
      }
    })
  }
  affichemedia(data) {
    const ch = data.data;
    const n = ch.indexOf(".") + 1;
    const ln = ch.length;
    const str = ch.substr(n, ln - n)
    const modalRef = this.modalService.open(DetaileMediaComponent);
    modalRef.componentInstance.obj = data;
    modalRef.componentInstance.type = str;



  }
  async addJame(id_commentaire: string) {
    await this.commentaireserv.jaimeCommentare(id_commentaire).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.errorer;
        if (!error) {

          this.sharedService.reloadComponent();
        }

      }, error: (err) => { }
    })
  }
  fileChange(event) {

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.file = file;
      this.data.append('file', file, file.name);
    }
  }

  async delete_commentare(id: string) {
    await this.commentaireserv.deletecommentaire(id).subscribe({
      next: (data) => {
        this.sharedService.reloadComponent();
      }, error: (err) => {
        swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
      }
    })
  }
}


