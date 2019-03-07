import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { ManageSubjectsComponent } from './components/manage-subjects/manage-subjects.component';
import { MainComponent } from './components/main/main.component';
import { DetailedSubjectComponent } from './components/detailed-subject/detailed-subject.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  // { path: 'posts', component: UploadPostsComponent },
  { path: 'register', component: RegistrationComponent },
  // { path: 'messages', component: MessengerComponent },
  { path: 'manage', component: ManageSubjectsComponent },
  { path: 'subject', component: DetailedSubjectComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
