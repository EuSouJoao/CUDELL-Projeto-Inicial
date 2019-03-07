import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarProfileComponent } from './sidebar-profile/sidebar-profile.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';
import { TablesContainerComponent } from './tables-container/tables-container.component';
import { TablePendingComponent } from './table-pending/table-pending.component';
import { TableMineComponent } from './table-mine/table-mine.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SidebarComponent,
    SidebarProfileComponent,
    SidebarMenuComponent,
    SidebarButtonComponent,
    TablesContainerComponent,
    TablePendingComponent,
    TableMineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
