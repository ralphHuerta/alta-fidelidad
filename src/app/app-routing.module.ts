import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PasswordRecoveryComponent } from './components/auth/passwordRecoveri/password-recovery/password-recovery.component';
import { CollectComponent } from './components/collect/collect.component';
import { CheckAccountComponent } from './components/auth/check-account/check-account.component';
import { EmailConfirmationComponent } from './components/auth/email-confirmation/email-confirmation.component';
import { CodeVerificationComponent } from './components/auth/passwordRecoveri/code-verification/code-verification.component';
import { NewPasswordComponent } from './components/auth/passwordRecoveri/new-password/new-password.component';
import { PointOfSaleComponent } from './components/charge/point-of-sale/point-of-sale.component';
import { MovementsComponent } from './components/charge/movements/movements.component';
import { SuccessfulTransactionsComponent } from './components/charge/successful-transactions/successful-transactions.component';
import { SendInvoiceComponent } from './components/charge/send-invoice/send-invoice.component';
import { ReimburseComponent } from './components/charge/reimburse/reimburse.component';
const routes: Routes = [
  {
    path: "",
    component: LoginComponent, 
  },
  {
    path: "home",
    component: HomeComponent, 
  },
  {
    path: "login",
    component: LoginComponent, 
  },
  {
    path: "register",
    component: RegisterComponent, 
  },
  {
    path: "collect",
    component: CollectComponent, 
  },
  {
    path: "movements",
    component: MovementsComponent, 
  },
  {
    path: "checkAccount",
    component: CheckAccountComponent, 
  },
  {
    path: "emailConfirmation",
    component: EmailConfirmationComponent, 
  },
  {
    path: "passwordRecovery",
    component: PasswordRecoveryComponent, 
  }
  ,
  {
    path: "passwordRecovery/code-verification",
    component: CodeVerificationComponent, 
  },
  {
    path: "passwordRecovery/code-verification/:id",
    component: CodeVerificationComponent, 
  },
  {
    path: "passwordRecovery/new-password",
    component: NewPasswordComponent, 
  }
  ,
  {
    path: "pointSale",
    component: PointOfSaleComponent, 
  },
  {
    path: "SuccessfulTransactions",
    component: SuccessfulTransactionsComponent,
  },
  {
    path: "SendInvoice",
    component: SendInvoiceComponent
  },
  {
    path: "reimburse",
    component: ReimburseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
