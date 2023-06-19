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
import { SignupComponent } from './login-sign/signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectLocationComponent } from './network/select-location/select-location.component';
import { LoginComponent } from './login-sign/login/login.component';
import { AccountCreatedDialogComponent } from './login-sign/account-created-dialog/account-created-dialog.component';
import { RegistrationdetailsComponent } from './registrationdetails/registrationdetails.component';


const routes: Routes = [
  //  {path:'header2',component:Header2Component},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'leasing',component:LeasingComponent},
  {path:'listing',component:ListingComponent},
  {path:'network',component:NetworkComponent},
  {path:'platform',component:PlatformComponent},
  {path:'career',component:CareerComponent},
  {path:'terms/conditions',component:ConditionsComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'select-location',component:SelectLocationComponent},
  {path:'account-created-dialog',component:AccountCreatedDialogComponent},
  {path:'registrationdetails',component:RegistrationdetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
