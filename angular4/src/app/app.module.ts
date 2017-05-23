import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyPicsComponent } from './components/my-pics/my-pics.component';
import { AllPicsComponent } from './components/all-pics/all-pics.component';
import { UserComponent } from './components/user/user.component';

import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path: '', component: AllPicsComponent},
  {path: 'myPics', component: MyPicsComponent, canActivate: [AuthGuardService]},
  {path: 'user', component: UserComponent}
];


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyPicsComponent,
    AllPicsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FlashMessagesModule,
    MasonryModule
  ],
  providers: [ AuthService, AuthGuardService, ApiService, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
