import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { ProfileComponent } from './componets/profile/profile.component';
import { HomeComponent } from './componets/home/home.component';
import { TaskComponent } from './componets/task/task.component';
import { AboutComponent } from './componets/about/about.component';
import { HeaderComponent } from './componets/header/header.component';
import { ButtonComponent } from './componets/button/button.component';
import { UserComponent } from './componets/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    HomeComponent,
    TaskComponent,
    AboutComponent,
    HeaderComponent,
    ButtonComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'task', component: TaskComponent },
      { path: 'about', component: AboutComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
