import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/guards/auth/auth-guard.service';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { BookViewComponent } from './views/book-view/book-view.component';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { ProfilViewComponent } from './views/profil-view/profil-view.component';

const routes: Routes = [
  {path: '', component: BooksViewComponent},
  {path: 'auth', component: AuthViewComponent},
  {path: 'books', canActivate: [AuthGuardService], component: BooksViewComponent},
  {path: 'book/:id', component: BookViewComponent},
  {path: 'profil', canActivate: [AuthGuardService], component: ProfilViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
