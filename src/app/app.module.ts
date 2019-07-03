import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// -------------------- IMPORT DE AppRoutingModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebSiteModule } from './web-site/web-site.module';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebSiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
