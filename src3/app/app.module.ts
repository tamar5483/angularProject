import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ManagerModule } from './manager/manager.module';
import { DoctorModule } from './doctor/doctor.module';
import { SecretaryModule } from './secretary/secretary.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CommonModule,
    BrowserAnimationsModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
