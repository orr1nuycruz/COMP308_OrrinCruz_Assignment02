// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { JwtModule, JwtHelperService, JwtInterceptor} from '@auth0/angular-jwt';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent,
    PageNotFoundComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
