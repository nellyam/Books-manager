import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book/book.service';
import { TableRowComponent } from './components/table-row/table-row.component';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { BookViewComponent } from './views/book-view/book-view.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthService } from './services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user/user.service';
import { ProfilViewComponent } from './views/profil-view/profil-view.component';


@NgModule({
  declarations: [
    AppComponent,
    TableRowComponent,
    BooksViewComponent,
    ErrorViewComponent,
    BookViewComponent,
    HeaderComponent,
    AuthViewComponent,
    ProfilViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
