import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { ManageSubjectsComponent } from './components/manage-subjects/manage-subjects.component';

const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  // { path: 'posts', component: UploadPostsComponent },
  { path: 'register', component: RegistrationComponent },
  // { path: 'messages', component: MessengerComponent },
  { path: 'manage', component: ManageSubjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
