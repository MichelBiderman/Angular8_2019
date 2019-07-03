import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// les 2 composants sont déclarés ici
import { Page404Component } from './page404/page404.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DivesModule } from './dives/dives.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './home-page/footer/footer.component';

@NgModule({
  declarations: [Page404Component,HomePageComponent, ContactFormComponent, FooterComponent], 
  imports: [
    CommonModule,
    DivesModule,
    FormsModule
  ]
})
// -------------------------------------
export class WebSiteModule { }
