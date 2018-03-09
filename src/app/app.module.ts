import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';


import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { UserService } from './services/user.service';
import { AuthenticationService} from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { SearchNoticeComponent } from './search-notice/search-notice.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { MyNoticeComponent } from './my-notice/my-notice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    SearchNoticeComponent,
    AddNoticeComponent,
    MyNoticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
