import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbActionsModule, NbCardModule, NbIconModule, NbListModule, NbCheckboxModule, NbSelectModule, NbInputModule, NbButtonModule, NbToastrModule, NbSidebarModule, NbContextMenuModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './_core/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbCardModule,
    NbIconModule,
    NbListModule,
    NbCheckboxModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule, 
    NbToastrModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
