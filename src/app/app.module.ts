import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeasingComponent } from './leasing/leasing.component';
import { ListingComponent } from './listing/listing.component';
import { NetworkComponent } from './network/network.component';
import { SelectLocationComponent } from './network/select-location/select-location.component';
import { PlatformComponent } from './platform/platform.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { ConditionsComponent } from './terms/conditions/conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './login-sign/signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridList } from '@angular/material/grid-list';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login-sign/login/login.component';
import { AccountCreatedDialogComponent } from './login-sign/account-created-dialog/account-created-dialog.component';
import { RegistrationdetailsComponent } from './registrationdetails/registrationdetails.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { StarRatingModule } from 'angular-star-rating';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LogsignbtnComponent } from './login-sign/logsignbtn/logsignbtn.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LeasingComponent,
    ListingComponent,
    NetworkComponent,
    PlatformComponent,
    AboutComponent,
    CareerComponent,
    ConditionsComponent,
    PrivacyPolicyComponent,
    SignupComponent,
    NavbarComponent,
    SelectLocationComponent,
    LoginComponent,
    AccountCreatedDialogComponent,
    RegistrationdetailsComponent,
    LogsignbtnComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatDatepickerModule,
    NgxStarRatingModule,
    MatFormFieldModule,
    MatNativeDateModule,
    StarRatingModule.forRoot(),
    MatCheckboxModule,
    ScrollingModule,
    FormsModule,
    HttpClientModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
