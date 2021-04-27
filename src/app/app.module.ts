import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../../projects/home-page/home-page.component';
import { JournalComponent } from '../../projects/journal/journal.component';
import { EstComponentsComponent } from '../../projects/est-components/est-components.component';
import { EstHeaderComponent } from './est-header/est-header.component';
import { PageNotFoundComponent } from '../../projects/page-not-found/page-not-found.component';
import { BlogBlurbComponent } from '../../projects/est-components/blog-blurb/blog-blurb.component';
import { WorkshopComponent } from '../../projects/workshop/workshop.component';
import { BorderLeftComponent } from '../../projects/journal/journal-post/border-left/border-left.component';
import { CodeWsComponent } from '../../projects/journal/journal-post/code-ws/code-ws.component';
import { FlexboxNavComponent } from '../../projects/journal/journal-post/flexbox-nav/flexbox-nav.component';
import { WorkRemoteComponent } from '../../projects/journal/journal-post/work-remote/work-remote.component';
import { WorkshopBlurbComponent } from '../../projects/est-components/workshop-blurb/workshop-blurb.component';
import { BlogHeaderComponent } from '../../projects/est-components/blog-header/blog-header.component';
import { MeatCampChurchComponent } from '../../projects/workshop/est-projects/meat-camp-church/meat-camp-church.component';
import { ProjectEntryComponent } from '../../projects/est-components/project-entry/project-entry.component';
import { OdflComponent } from '../../projects/workshop/est-projects/odfl/odfl.component';
import { WhatIsCyclingComponent } from '../../projects/workshop/est-projects/what-is-cycling/what-is-cycling.component';
import { OdMoveComponent } from '../../projects/workshop/est-projects/od-move/od-move.component';
import { BranchBankingTrustComponent } from '../../projects/workshop/est-projects/branch-banking-trust/branch-banking-trust.component';
import { FixieAppComponent } from '../../projects/workshop/est-projects/fixie-app/fixie-app.component';
import { TapplesBankingComponent } from '../../projects/workshop/est-projects/tapples-banking/tapples-banking.component';
import { HorizontalTimelineComponent } from '../../projects/workshop/est-projects/horizontal-timeline/horizontal-timeline.component';
import { EstablishedSixteenComponent } from '../../projects/workshop/est-projects/established-sixteen/established-sixteen.component';
import { EstProjectFigureComponent } from './est-project-figure/est-project-figure.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EstComponentsComponent,
    EstHeaderComponent,
    JournalComponent,
    PageNotFoundComponent,
    BlogBlurbComponent,
    WorkshopComponent,
    BorderLeftComponent,
    CodeWsComponent,
    FlexboxNavComponent,
    WorkRemoteComponent,
    WorkshopBlurbComponent,
    BlogHeaderComponent,
    MeatCampChurchComponent,
    ProjectEntryComponent,
    OdflComponent,
    WhatIsCyclingComponent,
    OdMoveComponent,
    BranchBankingTrustComponent,
    FixieAppComponent,
    TapplesBankingComponent,
    HorizontalTimelineComponent,
    EstablishedSixteenComponent,
    EstProjectFigureComponent
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
