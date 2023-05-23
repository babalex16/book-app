import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BookPageComponent } from './components/book-page/book-page.component';

const routes: Routes = [
  { path: '', component: SearchFormComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'book/:id', component: BookPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
