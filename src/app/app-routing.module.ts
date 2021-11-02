import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../../projects/home-page/home-page.component';
import { WorkshopComponent } from '../../projects/workshop/workshop.component';
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
import { TruistOlbComponent } from '../../projects/workshop/est-projects/truist-olb/truist-olb.component';
import { FindcenterComponent } from '../../projects/workshop/est-projects/findcenter/findcenter.component';

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
    path: 'truist',
    component: TruistOlbComponent,
    data: {title: 'Est.1992 - Workshop - Truist Retail Web'}
  },

  {
    path: 'findcenter',
    component: FindcenterComponent,
    data: {title: 'Est.1992 - Workshop - FindCenter'}
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
