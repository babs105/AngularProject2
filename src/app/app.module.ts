import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenent/home/home.component';
import { HeaderComponent } from './componenent/header/header.component';
import { FooterComponent } from './componenent/footer/footer.component';
import { DashbaordComponent } from './componenent/dashbaord/dashbaord.component';
import { LoginComponent } from './componenent/login/login.component';
import { ProfileComponent } from './componenent/profile/profile.component';
import { DetailsComponent } from './componenent/details/details.component';
import { PageNotFoundComponent } from './componenent/page-not-found/page-not-found.component';
import { MeteoListComponent } from './componenent/meteo-list/meteo-list.component';
import { ButtonSearchComponent } from './componenent/button-search/button-search.component';
import { SearchPipe } from './Pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashbaordComponent,
    LoginComponent,
    ProfileComponent,
    DetailsComponent,
    PageNotFoundComponent,
    MeteoListComponent,
    ButtonSearchComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }