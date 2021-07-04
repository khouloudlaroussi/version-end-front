import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ListAffectationComponent } from "./pages/affectation/list-affectation/list-affectation.component";
import { SigninComponent } from "./pages/auth/signin/signin.component";
import { ListTacheComponent } from "./pages/mang-tache/list-tache/list-tache.component";
import { ListProjectComponent } from "./pages/mangerProject/list-project/list-project.component";
import { MangProjectComponent } from "./pages/mangerProject/mang-project/mang-project.component";
import { ListprojetannulerComponent } from "./pages/mangerprojetannule/listprojetannuler/listprojetannuler.component";
import { ListeTecComponent } from "./pages/mangtec/liste-tec/liste-tec.component";
import { ChartejsComponent } from "./pages/parte2/chartejs/chartejs.component";
import { DetaileTacheCharetComponent } from "./pages/parte2/detaile-tache-charet/detaile-tache-charet.component";
import { ProjectCharetComponent } from "./pages/parte2/project-charet/project-charet.component";
import { TacheCharetComponent } from "./pages/parte2/tache-charet/tache-charet.component";
import { PublicDetailSujetComponent } from "./pages/public-detail-sujet/public-detail-sujet.component";
import { PublicListSujetComponent } from "./pages/public-list-sujet/public-list-sujet.component";
import { ListSujetComponent } from "./pages/sujet/list-sujet/list-sujet.component";
import { ConsulterMesTacheComponent } from "./pages/technisin/consulter-mes-tache/consulter-mes-tache.component";
const routes: Routes = [
  { path: "", component: SigninComponent },
  { path: "signin", component: SigninComponent },
  {
    path: "dashboard",
    component: HomePageComponent,
    children: [
      {
        path: '', component: ListProjectComponent
      },
      { path: "mang_proj", component: ListProjectComponent },
      { path: "mang-user", component: ListeTecComponent },
      { path: "mang-tache", component: ListTacheComponent },
      { path: "mang-affectation", component: ListAffectationComponent },
      { path: "project-blouquer", component: ListprojetannulerComponent },
      { path: "avancement", component: ProjectCharetComponent },
      { path: "detailetache/:id_project", component: TacheCharetComponent },
      { path: "detailestattache/:id_tache", component: DetaileTacheCharetComponent },
      { path: "chart", component: ChartejsComponent },

    ],
  },
  {
    path: "dashboard-user",
    component: HomePageComponent,
    children: [
      {
        path: '', component: ConsulterMesTacheComponent
      },
      {
        path: "mes-tache", component: ConsulterMesTacheComponent
      },
      { path: "my-sujet", component: ListSujetComponent },
      { path: "public-sujet", component: PublicListSujetComponent },
      { path: "detaile-sujet/:id_suject", component: PublicDetailSujetComponent },

    ]
  },
  { path: "**", component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
