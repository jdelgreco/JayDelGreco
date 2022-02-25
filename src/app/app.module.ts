import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdentityContainerComponent } from './shared/identity-container/identity-container.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { QuiltComponent } from './shared/quilt/quilt.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DevComponent } from './pages/dev/dev.component';
//import { Site, SitePage, ShirtSize } from './shared/interfaces/types.interface';
//import { SiteMapHelper } from './shared/helpers/siteMap.helper';

@NgModule({
  declarations: [
    AppComponent,
    IdentityContainerComponent,
    NavigationComponent,
    QuiltComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent,
    DevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [/*SiteMapHelper*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
