import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContainerComponent } from './home/container/container.component';
import { MydirectiveDirective } from './mydirective.directive';
import { MyfilterPipe } from './myfilter.pipe';
import { DashboardComponent } from './home/container/dashboard/dashboard.component';
import { DetailComponent } from './home/container/detail/detail.component';
import { AjoutComponent } from './home/container/ajout/ajout.component';
import { LoginComponent } from './home/container/login/login.component';
import { InscriptionComponent } from './home/container/inscription/inscription.component';

const mesRoutes:Routes = [
  {path:'',component:DashboardComponent},
  {path:'ajout',component:AjoutComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'login',component:LoginComponent},
  {path:'inscription',component:InscriptionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContainerComponent,
    MydirectiveDirective,
    MyfilterPipe,
    DashboardComponent,
    DetailComponent,
    AjoutComponent,
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(mesRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
