import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorGuard } from './doctor/doctor.guard';
import { LoginGuard } from './login/login.guard';
import { LoginformComponent } from './login/loginForm/loginForm.component';
import { ManagerGuard } from './manager/manager.guard';
import { SercrateryGuard } from './secretary/sercratery.guard';
const routes: Routes = [
  {
    path: 'manager/:id',
     loadChildren: ()=> import('./manager/manager.module').then(m => m.ManagerModule),
    canActivate : [ManagerGuard],
  },
   {
    path: 'doctor/:doctorId',
    canActivate : [DoctorGuard], 
     loadChildren: ()=> import('./doctor/doctor.module').then(d => d.DoctorModule)
  },
  {
    path: 'secretary/:id',
    canActivate : [SercrateryGuard], 
     loadChildren: ()=> import('./secretary/secretary.module').then(s => s.SecretaryModule)
  },{
    path:'login',
    component:LoginformComponent,
    canActivate : [LoginGuard], 

  },
   {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  }
  ,{
    path:"**",
redirectTo:'login'    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
