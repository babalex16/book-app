import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './components/navigation/navigation.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookPageComponent } from './pages/book-page/book-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SearchFormComponent,
    AboutPageComponent,
    NavigationComponent,
    BookCardComponent,
    BookPageComponent,
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
