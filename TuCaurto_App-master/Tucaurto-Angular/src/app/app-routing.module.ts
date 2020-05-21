import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { SignoutComponent } from './components/signout/signout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { PropertyViewComponent } from './components/property-view/property-view.component';
import { PostPropertyComponent } from './components/post-property/post-property.component';
import { MypropertiesComponent } from './components/myproperties/myproperties.component';
import { PropertyEditComponent } from './components/property-edit/property-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent, canActivate: [AuthGaurdService] },
  { path: 'view', component: PropertyViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'teams', component: TeamsComponent },
  {
    path: 'myproperties',
    component: MypropertiesComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'postproperty',
    component: PostPropertyComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'propertyView/:id',
    component: PropertyViewComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'profileedit',
    component: ProfileEditComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'myproperties/property-edit/:id',
    component: PropertyEditComponent,
    canActivate: [AuthGaurdService],
  },
  {
    path: 'signout',
    component: SignoutComponent,
    canActivate: [AuthGaurdService],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
