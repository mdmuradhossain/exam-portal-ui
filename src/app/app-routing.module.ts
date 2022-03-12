import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/admin.guard';
import { UserGuard } from './core/user.guard';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    // pathMatch: 'full',
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
