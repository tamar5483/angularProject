import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './loginForm/loginForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RemoveWarningDirective } from './remove-warning.directive';


@NgModule({
  declarations:
   [
     LoginformComponent,
     RemoveWarningDirective
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginformComponent
  ]
})
export class LoginModule { }
