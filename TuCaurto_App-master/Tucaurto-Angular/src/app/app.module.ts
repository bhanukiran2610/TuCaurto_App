import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SignoutComponent } from './components/signout/signout.component';
import { PropertyViewComponent } from './components/property-view/property-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostPropertyComponent } from './components/post-property/post-property.component';
import { MypropertiesComponent } from './components/myproperties/myproperties.component';
import { PropertyEditComponent } from './components/property-edit/property-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ErrorComponent,
    RegisterComponent,
    HomeComponent,
    IndexComponent,
    ProfileEditComponent,
    TeamsComponent,
    ContactUsComponent,
    SignoutComponent,
    PropertyViewComponent,

    PostPropertyComponent,
    MypropertiesComponent,
    PropertyEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
