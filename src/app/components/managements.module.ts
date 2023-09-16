
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DangNhapComponent } from './pages/home/dang-nhap/dang-nhap.component';
import { DangKyComponent } from './pages/home/dang-ky/dang-ky.component';

@NgModule({
  imports: [
  ],exports: [
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  declarations: [


    DangNhapComponent,
    DangKyComponent
  ],
  // entryComponents: [

  // ],
})
export class ManagementsModule {

}
