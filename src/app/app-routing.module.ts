import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../../projects/home-page/home-page.component';
import { JournalComponent } from '../../projects/journal/journal.component';
import { PageNotFoundComponent } from '../../projects/page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },

  { 
    path: 'home', 
    component: HomePageComponent, 
    data: {title: 'Est.1992 - Elijah Townsend'} 
  },
  
  { 
    path: 'journal', 
    component: JournalComponent, 
    data: {title: 'Est.1992 - Journal'} 
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
