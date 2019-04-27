import { AjoutContenuComponent } from './ajout-contenu/ajout-contenu.component';
import { FavorisComponent } from './favoris/favoris.component';
import { PublicationComponent } from './publication/publication.component';
import { ResultatRechercheComponent } from './resultat-recherche/resultat-recherche.component';
import { RechercheComponent } from './recherche/recherche.component';
import { PromouvoirComponent } from './promouvoir/promouvoir.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { ProfilComponent } from './profil/profil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ALaUneComponent } from './a-la-une/a-la-une.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:ALaUneComponent
  },
  {
    path:'inscription',
    component:InscriptionComponent
  },
  {
    path:'connexion',
    component:ConnexionComponent
  },
  {
    path:'profil',
    component:ProfilComponent
  },
  {
    path:'nouveautes',
    component:NouveautesComponent
  },
  {
    path:'promouvoir',
    component:PromouvoirComponent
  },
  {
    path:'recherche',
    component:RechercheComponent
  },
  {
    path:'resultat-recherche',
    component:RechercheComponent
  },
  {
    path:'publication',
    component:PublicationComponent
  },
  {
    path:'favoris',
    component:FavorisComponent
  },
  {
    path:'ajout-contenu',
    component:AjoutContenuComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
