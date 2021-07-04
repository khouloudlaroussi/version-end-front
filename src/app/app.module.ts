import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProjectComponent } from './pages/mangerProject/list-project/list-project.component';
import { MangProjectComponent } from './pages/mangerProject/mang-project/mang-project.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeleteConfiremComponent } from './pages/mangerProject/delete-confirem/delete-confirem.component';
import { ListeTecComponent } from './pages/mangtec/liste-tec/liste-tec.component';
import { AddUpdateTecComponent } from './pages/mangtec/add-update-tec/add-update-tec.component';
import { DeleteTecComponent } from './pages/mangtec/delete-tec/delete-tec.component';
import { ListTacheComponent } from './pages/mang-tache/list-tache/list-tache.component';
import { AddUpdateTacheComponent } from './pages/mang-tache/add-update-tache/add-update-tache.component';
import { DeleteTacheComponent } from './pages/mang-tache/delete-tache/delete-tache.component';
import { InfoTacheComponent } from './pages/mang-tache/info-tache/info-tache.component';
import { AddUpAffectationComponent } from './pages/affectation/add-up-affectation/add-up-affectation.component';
import { DeleteAffectationComponent } from './pages/affectation/delete-affectation/delete-affectation.component';
import { ListAffectationComponent } from './pages/affectation/list-affectation/list-affectation.component';
import { InfTecnsComponent } from './pages/mangtec/inf-tecns/inf-tecns.component';
import { InfoProjectComponent } from './pages/mangerProject/info-project/info-project.component';
import { ListSujetComponent } from './pages/sujet/list-sujet/list-sujet.component';
import { DeleteSujetComponent } from './pages/sujet/delete-sujet/delete-sujet.component';
import { AddUpdateSujetComponent } from './pages/sujet/add-update-sujet/add-update-sujet.component';

import { ConsulterMesTacheComponent } from './pages/technisin/consulter-mes-tache/consulter-mes-tache.component';

import { UpdateEtatTacheComponent } from './pages/technisin/update-etat-tache/update-etat-tache.component';
import { ConfermeStaretComponent } from './pages/technisin/conferme-staret/conferme-staret.component';
import { ListprojetannulerComponent } from './pages/mangerprojetannule/listprojetannuler/listprojetannuler.component';
import { InfoSujetComponent } from './pages/sujet/info-sujet/info-sujet.component';
import { PublicListSujetComponent } from './pages/public-list-sujet/public-list-sujet.component';
import { PublicDetailSujetComponent } from './pages/public-detail-sujet/public-detail-sujet.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetaileMediaComponent } from './pages/detaile-media/detaile-media.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectCharetComponent } from './pages/parte2/project-charet/project-charet.component';
import { TacheCharetComponent } from './pages/parte2/tache-charet/tache-charet.component';
import { DetaileTacheCharetComponent } from './pages/parte2/detaile-tache-charet/detaile-tache-charet.component';  
import { AccumulationChartModule,PieSeriesService ,
  AccumulationDataLabelService
  ,AccumulationLegendService
  ,AccumulationTooltipService
  } from '@syncfusion/ej2-angular-charts';
import { ChartejsComponent } from './pages/parte2/chartejs/chartejs.component';
  




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SigninComponent,

    HomePageComponent,
    ListProjectComponent,
    MangProjectComponent,
    AddUpAffectationComponent,
    DeleteConfiremComponent,
    ListeTecComponent,
    AddUpdateTecComponent,
    DeleteTecComponent,
    ListTacheComponent,
    DeleteTacheComponent,
    InfoTacheComponent,
    DeleteAffectationComponent,
    ListAffectationComponent,
    InfTecnsComponent,
    InfoProjectComponent,
    AddUpdateTacheComponent,
    ListSujetComponent,
    DeleteSujetComponent,
    AddUpdateSujetComponent,

    ConsulterMesTacheComponent,
    UpdateEtatTacheComponent,
    ConfermeStaretComponent,
    ListprojetannulerComponent,
    InfoSujetComponent,
    PublicListSujetComponent,
    PublicDetailSujetComponent,
    DetaileMediaComponent,
    NotFoundComponent,
    ProjectCharetComponent,
    TacheCharetComponent,
    DetaileTacheCharetComponent,
    ChartejsComponent






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule, // required animations module
    Ng2SearchPipeModule,
    AccumulationChartModule

    
  ],
  entryComponents: [DetaileMediaComponent, InfoSujetComponent, DeleteSujetComponent, DeleteTacheComponent, ConfermeStaretComponent
    , UpdateEtatTacheComponent, DeleteTecComponent, AddUpdateTecComponent, InfoProjectComponent, InfTecnsComponent,
    MangProjectComponent, AddUpdateTacheComponent, DeleteConfiremComponent, InfoTacheComponent,
    AddUpAffectationComponent, DeleteAffectationComponent, AddUpdateSujetComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [PieSeriesService,AccumulationTooltipService,AccumulationDataLabelService,AccumulationLegendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
