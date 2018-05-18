import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginService } from 'app/login/login-service.service';
import { AuthGuard } from 'app/login/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'app/shared-module/shared-module.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModuleModule],
  declarations: [LoginComponent],
  providers: [LoginService, AuthGuard]
})
export class LoginModule {}
