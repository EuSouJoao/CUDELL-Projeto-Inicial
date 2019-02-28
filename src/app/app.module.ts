import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarProfileComponent } from './sidebar-profile/sidebar-profile.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SidebarComponent,
    SidebarProfileComponent,
    SidebarMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
