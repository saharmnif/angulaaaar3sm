import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { HttpClientModule} from'@angular/common/http';
import { ErreurComponent } from './component/erreur/erreur.component';
import { InscrireComponent } from './component/inscrire/inscrire.component';
import { SelectedparfumComponent } from './ex/selectedparfum/selectedparfum.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParfumajouterComponent } from './ex/parfumajouter/parfumajouter.component';
import { ParfummodifierComponent } from './ex/parfummodifier/parfummodifier.component';
import { ParfumsupprimerComponent } from './ex/parfumsupprimer/parfumsupprimer.component';
import { AproposdenousComponent } from './ex/aproposdenous/aproposdenous.component';
import { ListparfumComponent } from './component/listparfum/listparfum.component';
import { NomsmPipe } from './nomsm.pipe';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AcceuilComponent,
    ErreurComponent,
    InscrireComponent,
 
  
    SelectedparfumComponent,
       ParfumajouterComponent,
       ParfummodifierComponent,
       ParfumsupprimerComponent,
   
       AproposdenousComponent,
       ListparfumComponent,
       NomsmPipe,
  
     
  ],
  imports: [
    BrowserModule,
    AdminModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
