import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './components/error/error.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { ZakenComponent } from './components/zaken/zaken.component';
import { AddmenuComponent } from './components/addmenu/addmenu.component';
import { ZaakComponent } from './components/zaak/zaak.component';
import {MyAccountComponent} from './components/my-account/my-account.component';
<<<<<<< HEAD
import {AdsComponent} from './components/ads/ads.component';
=======
<<<<<<< Updated upstream
>>>>>>> took changes from stash
import { AddEditEstablishmentComponent } from './components/add-edit-establishment/add-edit-establishment.component';
<<<<<<< HEAD
import {AllZakenComponent} from './components/all-zaken/all-zaken.component';


=======
import { AllZakenComponent } from './components/all-zaken/all-zaken.component';
=======
>>>>>>> Stashed changes
import { BestellenComponent } from './components/bestellen/bestellen.component';
>>>>>>> added bestellen compo en service linked to page in header



const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'error', component: ErrorComponent },
  // { path: 'addestablishment', component: AddEditEstablishmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'MyAccount', component: MyAccountComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'menu/:zaakNaam', component: MenuComponent },
  { path: 'zaken', component: ZakenComponent },
  { path: 'menu/:zaakNaam/addmenu', component:AddmenuComponent },
  { path: 'zaken/:id', component: ZaakComponent },
<<<<<<< HEAD
  { path: 'ads', component:AdsComponent},
  { path: 'allZaken', component: AllZakenComponent},
<<<<<<< HEAD

=======
=======
<<<<<<< Updated upstream
  { path: 'allZaken', component: AllZakenComponent},
=======
>>>>>>> Stashed changes
>>>>>>> took changes from stash
  { path: 'bestellen', component: BestellenComponent},
>>>>>>> added bestellen compo en service linked to page in header
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
