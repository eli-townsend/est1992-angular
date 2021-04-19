import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../../projects/home-page/home-page.component';
import { JournalComponent } from '../../projects/journal/journal.component';
import { WorkshopComponent } from '../../projects/workshop/workshop.component';
import { BorderLeftComponent } from '../../projects/journal/journal-post/border-left/border-left.component';
import { CodeWsComponent } from '../../projects/journal/journal-post/code-ws/code-ws.component';
import { FlexboxNavComponent } from '../../projects/journal/journal-post/flexbox-nav/flexbox-nav.component';
import { WorkRemoteComponent } from '../../projects/journal/journal-post/work-remote/work-remote.component';
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

  { 
    path: 'border-left', 
    component: BorderLeftComponent, 
    data: {title: 'Est.1992 - Journal - Border-Left: Required;'} 
  },

  { 
    path: 'code-ws', 
    component: CodeWsComponent, 
    data: {title: 'Est.1992 - Journal - Code for Winston-Salem'} 
  },

  { 
    path: 'flexbox-nav', 
    component: FlexboxNavComponent, 
    data: {title: 'Est.1992 - Journal - Flexbox Responsive Navigation'} 
  },

  { 
    path: 'work-remote', 
    component: WorkRemoteComponent, 
    data: {title: 'Est.1992 - Journal - Future Proof Your Company'} 
  },
  
  { 
    path: 'workshop', 
    component: WorkshopComponent, 
    data: {title: 'Est.1992 - Workshop'} 
  },

  {
    path: '**', 
    component: PageNotFoundComponent,
    data: {title: 'Est.1992 - 404'} 
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
