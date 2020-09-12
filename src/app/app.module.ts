import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../../projects/home-page/home-page.component';
import { JournalComponent } from '../../projects/journal/journal.component';
import { EstComponentsComponent } from '../../projects/est-components/est-components.component';
import { EstFooterComponent } from './est-footer/est-footer.component';
import { EstHeaderComponent } from './est-header/est-header.component';
import { PageNotFoundComponent } from '../../projects/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EstComponentsComponent,
    EstFooterComponent,
    EstHeaderComponent,
    JournalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
