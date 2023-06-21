import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { PlanetListComponent } from '../planet/planet-list/planet-list.component';
import { ResaltarDirective } from '../directives/resaltar.directive';

@NgModule({
  declarations: [AppComponent, UserProfileComponent, PlanetListComponent, ResaltarDirective],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    //LoggerService, // tal cual
    // te pida LoggerService -> Logger2Service
    //{ provide: LoggerService, useClass: Logger2Service },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
