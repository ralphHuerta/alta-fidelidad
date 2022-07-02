import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './materialUl/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PasswordRecoveryComponent } from './components/auth/passwordRecoveri/password-recovery/password-recovery.component';
import { HomeComponent } from './components/home/home.component';
import { CollectComponent } from './components/collect/collect.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckAccountComponent } from './components/auth/check-account/check-account.component';
import { EmailConfirmationComponent } from './components/auth/email-confirmation/email-confirmation.component';
import { NewPasswordComponent } from './components/auth/passwordRecoveri/new-password/new-password.component';
import { CodeVerificationComponent } from './components/auth/passwordRecoveri/code-verification/code-verification.component';
import { PointOfSaleComponent } from './components/charge/point-of-sale/point-of-sale.component';
import { MovementsComponent } from './components/charge/movements/movements.component';
import { HeaderComponent } from './components/header/header.component';
import { SuccessfulTransactionsComponent } from './components/charge/successful-transactions/successful-transactions.component';
import { SendInvoiceComponent } from './components/charge/send-invoice/send-invoice.component';
import { ReimburseComponent } from './components/charge/reimburse/reimburse.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    HomeComponent,
    CollectComponent,
    CheckAccountComponent,
    EmailConfirmationComponent,
    NewPasswordComponent,
    CodeVerificationComponent,
    PointOfSaleComponent,
    MovementsComponent,
    HeaderComponent,
    SuccessfulTransactionsComponent,
    SendInvoiceComponent,
    ReimburseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
