import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper/wrapper.component';
import { DangNhapComponent } from './components/pages/home/dang-nhap/dang-nhap.component';
import { DangKyComponent } from './components/pages/home/dang-ky/dang-ky.component';


const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [{
      path: '',
      loadChildren: () => import('./components/managements.module').then(mod => mod.ManagementsModule)
    }]
  },
  {
    path: 'dang-nhap',
    component: DangNhapComponent
  },
  {
    path: 'dang-ky',
    component: DangKyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
