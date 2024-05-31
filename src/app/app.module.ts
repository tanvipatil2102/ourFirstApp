import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ListComponent } from './shared/components/list/list.component';
import { TmdbComponent } from './shared/components/tmdb/tmdb.component';
import { ProductComponent } from './shared/components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { TabsComponent } from './shared/components/tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TmdbComponent,
    ProductComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
