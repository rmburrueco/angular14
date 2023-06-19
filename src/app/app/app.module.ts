import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { LoggerService } from '../services/logger.service';
import { Logger2Service } from '../services/logger2.service';

@NgModule({
  declarations: [AppComponent, UserProfileComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    //LoggerService, // tal cual
    // te pida LoggerService -> Logger2Service
    //{ provide: LoggerService, useClass: Logger2Service },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
