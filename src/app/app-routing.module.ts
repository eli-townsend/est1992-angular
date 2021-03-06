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
import { MeatCampChurchComponent } from '../../projects/workshop/est-projects/meat-camp-church/meat-camp-church.component';
import { OdflComponent } from '../../projects/workshop/est-projects/odfl/odfl.component';
import { WhatIsCyclingComponent } from '../../projects/workshop/est-projects/what-is-cycling/what-is-cycling.component';
import { OdMoveComponent } from '../../projects/workshop/est-projects/od-move/od-move.component';
import { BranchBankingTrustComponent } from '../../projects/workshop/est-projects/branch-banking-trust/branch-banking-trust.component';
import { FixieAppComponent } from '../../projects/workshop/est-projects/fixie-app/fixie-app.component';
import { TapplesBankingComponent } from '../../projects/workshop/est-projects/tapples-banking/tapples-banking.component';
import { HorizontalTimelineComponent } from '../../projects/workshop/est-projects/horizontal-timeline/horizontal-timeline.component';
import { EstablishedSixteenComponent } from '../../projects/workshop/est-projects/established-sixteen/established-sixteen.component';

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
    path: 'meatcampchurch', 
    component: MeatCampChurchComponent, 
    data: {title: 'Est.1992 - Workshop - Meat Camp Church'} 
  },
  
  { 
    path: 'odfl', 
    component: OdflComponent, 
    data: {title: 'Est.1992 - Workshop - ODFL'} 
  },
  
  { 
    path: 'whatiscycling', 
    component: WhatIsCyclingComponent, 
    data: {title: 'Est.1992 - Workshop - What Is Cycling'} 
  },
  
  { 
    path: 'odmove', 
    component: OdMoveComponent, 
    data: {title: 'Est.1992 - Workshop - OD Move'} 
  },
  
  { 
    path: 'bbt', 
    component: BranchBankingTrustComponent, 
    data: {title: 'Est.1992 - Workshop - BB&T'} 
  },

  { 
    path: 'fixie', 
    component: FixieAppComponent, 
    data: {title: 'Est.1992 - Workshop - Fixie'} 
  },
 
  { 
    path: 'tapples', 
    component: TapplesBankingComponent, 
    data: {title: 'Est.1992 - Workshop - Tapples Banking'} 
  },
  
  { 
    path: 'timeline', 
    component: HorizontalTimelineComponent, 
    data: {title: 'Est.1992 - Workshop - Horizontal Timeline'} 
  },
  
  { 
    path: 'estsixteen', 
    component: EstablishedSixteenComponent, 
    data: {title: 'Est.1992 - Workshop - Established1992 2016'} 
  },

  {
    path: '**', 
    component: PageNotFoundComponent,
    data: {title: 'Est.1992 - 404'} 
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
