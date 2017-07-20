import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RouterModule, Route } from '@angular/router';
import { ConfigService } from './service/config.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



export let routes: Route[] = [{
  path: '',
  redirectTo: '/admin',
  pathMatch: 'full'
}, {
  path: 'admin/login',
  component: LoginPageComponent,

}, {
  path: 'admin',
  component: AdminPageComponent,
  children: [{
    path: 'home',
    component: HomePageComponent
  }
  ]
}];
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
