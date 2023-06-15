import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'acercade', component: AcercadeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
