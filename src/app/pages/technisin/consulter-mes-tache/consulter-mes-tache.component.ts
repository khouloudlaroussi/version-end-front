import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Tache } from '../../../modeles/tache';
import { ConsultationService } from '../../../service/consultation.service';
import swal from 'sweetalert';
import { SharedServiceService } from '../../../service/shared-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateEtatTacheComponent } from '../update-etat-tache/update-etat-tache.component';
import { ConfermeStaretComponent } from '../conferme-staret/conferme-staret.component';
@Component({
  selector: 'app-consulter-mes-tache',
  templateUrl: './consulter-mes-tache.component.html',
  styleUrls: ['./consulter-mes-tache.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ConsulterMesTacheComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';
  p: number;
  p1: number;
  p2: number;
  editAbout = true;
  editAboutIcon = 'icofont-edit';

  public basicContent: string;


  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;
  listetache: Tache[] = [];
  ferstlist: Tache[] = [];
  selector: string = '.main-panel';
  searchText: string;
  listIdMesDemonde: string[] = [];
  id_user: string;
  constructor(private modalService: NgbModal, private serviceconsultation: ConsultationService, private sharedservice: SharedServiceService) {
  }

  ngOnInit() {
    this.sharedservice.checkUserRole(false)
    const id_user = this.sharedservice.getuserID();
    this.id_user = id_user;
    this.getMesAffection(this.id_user, "0");


  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  toggleEditAbout() {
    this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
  }

  async getMesAffection(id, etat_tache) {
    this.listetache = [];
    this.serviceconsultation.get_all_mes_affectation(id, etat_tache).subscribe({
      next: (data) => {
        const donne: any = data;
        const msg = donne.msg;
        const error = donne.error;
        if (!error) {
          
          this.listetache = msg;
        } else {
          this.listetache = [];
          swal('Error', 'pas de donne', 'error');
        }
      }, error: () => {
        swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error');
      }
    })
  }

  changeEtat(event) {
    this.getMesAffection(this.id_user, event.nextId);
  }
  updateEtatTache(id_tache, etat, tab_type) {

    const modalRef = this.modalService.open(UpdateEtatTacheComponent);
    modalRef.componentInstance.id = id_tache;
    modalRef.componentInstance.et = etat;
    modalRef.componentInstance.titre = 'Modifier Etat';
    modalRef.componentInstance.tab_type = tab_type;


  }
  startTache(id: string) {
    const modalRef = this.modalService.open(ConfermeStaretComponent);
    modalRef.componentInstance.id = id;

  }
}