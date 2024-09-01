import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {SignInComponent} from './iam/pages/sign-in/sign-in.component';
import {SignUpComponent} from './iam/pages/sign-up/sign-up.component';
import {ResetPasswordComponent} from './iam/pages/reset-password/reset-password.component';
import {SignInFormComponent} from './iam/components/sign-in-form/sign-in-form.component';
import {ResetPasswordFormComponent} from './iam/components/reset-password-form/reset-password-form.component';
import {SignUpFormComponent} from './iam/components/sign-up-form/sign-up-form.component';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';

import {MatTable, MatTableModule} from "@angular/material/table";
import {CdkCellDef, CdkFooterRowDef, CdkHeaderCellDef, CdkHeaderRowDef, CdkTable} from "@angular/cdk/table";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    SignInFormComponent,
    ResetPasswordFormComponent,
    SignUpFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    FormsModule,
    MatFormField,
    CommonModule,
    MatCard,
    MatIcon,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSelectModule,
    MatTable,
    MatTableModule,
    CdkTable,
    CdkHeaderCellDef,
    CdkCellDef,
    CdkHeaderRowDef,
    CdkTable,
    CdkFooterRowDef,
    CdkFooterRowDef,
    MatDialogModule,
    MatFormField,
    FormsModule,
    MatLabel,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
