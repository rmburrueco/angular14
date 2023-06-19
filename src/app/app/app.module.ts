import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { LoggerService } from '../services/logger.service';

@NgModule({
  declarations: [AppComponent, UserProfileComponent],
  imports: [BrowserModule, FormsModule],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
