import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { ManageSubjectsComponent } from './components/manage-subjects/manage-subjects.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  // { path: 'posts', component: UploadPostsComponent },
  { path: 'register', component: RegistrationComponent },
  // { path: 'messages', component: MessengerComponent },
  { path: 'manage', component: ManageSubjectsComponent }
  // { path: 'registration', component: ManageSubjectsComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
