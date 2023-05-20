import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  { path: '', component: BooksPageComponent},
  { path: 'about', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
