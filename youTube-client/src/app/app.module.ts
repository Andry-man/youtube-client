import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { IheaderComponent } from './components/iheader/iheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginBlockComponent } from './components/iheader/login-block/login-block.component';
import { LogoComponent } from './components/iheader/logo/logo.component';
import { SearchInputAndButtonComponent } from './components/iheader/search-input-and-button/search-input-and-button.component';
import { SettinggButtonComponent } from './components/iheader/settingg-button/settingg-button.component';
import { SortingBlockComponent } from './components/iheader/sorting-block/sorting-block.component';
import { ByWordComponent } from './components/iheader/sorting-block/by-word/by-word.component';
import { DateComponent } from './components/iheader/sorting-block/date/date.component';
import { ViewsComponent } from './components/iheader/sorting-block/views/views.component';
import { ItemInfoComponent } from './components/search-item/item-info/item-info.component';
import { NofoundComponent } from './components/nofound/nofound.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AdminPageComponent } from './module/admin/admin-page/admin-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    SearchItemComponent,
    IheaderComponent,
    LoginBlockComponent,
    LogoComponent,
    SearchInputAndButtonComponent,
    SettinggButtonComponent,
    SortingBlockComponent,
    ByWordComponent,
    DateComponent,
    ViewsComponent,
    ItemInfoComponent,
    NofoundComponent,
    UserPageComponent,
    // AdminPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
