import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  LucideAngularModule,
  Settings,
  Code,
  Database,
  Globe,
  ChevronRight,
  Laptop,
  MessageSquare,
  Mail,
  Phone,
  Users
} from 'lucide-angular';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MembersComponent } from './components/members/members.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, ServicesComponent, AboutComponent, ProyectsComponent, TestimonialsComponent, ContactComponent, FooterComponent, MembersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({
      Settings,
      Code,
      Database,
      Globe,
      ChevronRight,
      Laptop,
      MessageSquare,
      Mail,
      Phone,
      Users
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
