import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TitlePageComponent } from './../common/components/title-page/title-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/clientes/cadastro/cadastro.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EdicaoComponent } from './pages/clientes/edicao/edicao.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { MatErrorInputComponent } from 'src/common/components/mat-error-input/mat-error-input.component';
import { VisualizacaoComponent } from './pages/clientes/visualizacao/visualizacao.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderPageComponent } from 'src/common/components/header-page/header-page.component';
import { SnackbarSimpleComponent } from 'src/common/components/snackbar/snackbar-simple/snackbar-simple.component';
import { DialogTwoButtonsComponent } from 'src/common/modal/dialog-two-buttons/dialog-two-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    ClientesComponent,
    CadastroComponent,
    EdicaoComponent,
    VisualizacaoComponent,
    LoginComponent,
    DashboardComponent,
    MatErrorInputComponent,
    TitlePageComponent,
    DialogTwoButtonsComponent,
    SnackbarSimpleComponent,
    HeaderPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
    MatMenuModule,
    NgxMaskModule.forRoot(),
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
