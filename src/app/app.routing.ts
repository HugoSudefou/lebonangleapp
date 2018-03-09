import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { SearchNoticeComponent } from './search-notice/search-notice.component';
import { MyNoticeComponent } from './my-notice/my-notice.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'searchNotice', component: SearchNoticeComponent, canActivate: [AuthGuard]  },
  { path: 'addNotice', component: AddNoticeComponent, canActivate: [AuthGuard]  },
  { path: 'myNotice', component: MyNoticeComponent, canActivate: [AuthGuard]  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
