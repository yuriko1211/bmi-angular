import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BmiComponent } from './bmi/bmi.component';

@NgModule({
  declarations: [AppComponent, BmiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: BmiComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
