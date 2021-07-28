import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogDataExampleDialog } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgsavatarModule } from 'ngs-avatar';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DialogDataExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatSidenavModule, MatButtonModule,
    FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatCardModule, MatIconModule,
    NgsavatarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [
    ApiService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
