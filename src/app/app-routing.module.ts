import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBranchComponent } from './components/add-branch/add-branch.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "add-branch", component: AddBranchComponent},
  { path: "add-subject", component: AddSubjectComponent},
  { path: "add-document", component: AddDocumentComponent},
  { path: "sign-in", component: SignInComponent},
  { path: "sign-up", component: SignUpComponent},
  { path: "profile", component: ProfileComponent},
  { path: "edit-profile", component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
