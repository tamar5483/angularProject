import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'patients',
    loadChildren: ()=> import('../patients/patients.module').then(p => p.PatientsModule)
   },

 
   {
     path:'',
     redirectTo:'patients',
     pathMatch:'full'
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
