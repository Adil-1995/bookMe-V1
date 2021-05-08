import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatIconModule} from '@angular/material/Icon';
 import {MatSidenavModule} from '@angular/material/Sidenav';
 import {MatListModule} from '@angular/material/List';
 import {MatButtonModule} from '@angular/material/Button';
import { DefaultComponent } from './layouts/default/default.component';






// import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DefaultComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    FontAwesomeModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule



  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '305759413105-hqv4lqgv5nmgjfj32ug9b71pj0loeamb.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
