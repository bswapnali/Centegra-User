import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LeasingComponent } from './leasing/leasing.component';
import { ListingComponent } from './listing/listing.component';
import { NetworkComponent } from './network/network.component';
import { PlatformComponent } from './platform/platform.component';
import { CareerComponent } from './career/career.component';
import { ConditionsComponent } from './terms/conditions/conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  //  {path:'header2',component:Header2Component},
  {path:'',component:HomeComponent},
  // {path:'footer',component:FooterComponent},
  {path:'about',component:AboutComponent},
  {path:'leasing',component:LeasingComponent},
  {path:'listing',component:ListingComponent},
  {path:'network',component:NetworkComponent},
  {path:'platform',component:PlatformComponent},
  {path:'career',component:CareerComponent},
  {path:'terms/conditions',component:ConditionsComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'signup',component:SignupComponent},
  {path:'navbar',component:NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
