import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'food-and-beverage', component: FoodAndBeverageComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]


})
export class AppRoutingModule {}
