import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavGaucheComponent } from './nav-gauche/nav-gauche.component';
import { NavHautComponent } from './nav-haut/nav-haut.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { ALaUneComponent } from './a-la-une/a-la-une.component';
import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { PromouvoirComponent } from './promouvoir/promouvoir.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ResultatRechercheComponent } from './resultat-recherche/resultat-recherche.component';
import { PublicationComponent } from './publication/publication.component';
import { FavorisComponent } from './favoris/favoris.component';
import { AjoutContenuComponent } from './ajout-contenu/ajout-contenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavGaucheComponent,
    NavHautComponent,
    InscriptionComponent,
    ConnexionComponent,
    ProfilComponent,
    ALaUneComponent,
    NouveautesComponent,
    PromouvoirComponent,
    RechercheComponent,
    ResultatRechercheComponent,
    PublicationComponent,
    FavorisComponent,
    AjoutContenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
