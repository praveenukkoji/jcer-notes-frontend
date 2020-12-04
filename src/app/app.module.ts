import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddBranchComponent } from './components/add-branch/add-branch.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ListDocumentComponent } from './components/list-document/list-document.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBranchComponent,
    AddSubjectComponent,
    AddDocumentComponent,
    SignInComponent,
    SignUpComponent,
    EditProfileComponent,
    ListDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
