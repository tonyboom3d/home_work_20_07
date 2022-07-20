import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { SideNavComponent } from './layout/main/side-nav/side-nav.component';
import { LogoComponentComponent } from './layout/header/logo-component/logo-component.component';
import { HamburgerComponentComponent } from './layout/header/hamburger-component/hamburger-component.component';
import { RightMenuComponent } from './layout/header/right-menu/right-menu.component';
import { LeftMenuComponent } from './layout/header/left-menu/left-menu.component';
import { LoggedComponent } from './layout/header/right-menu/logged/logged.component';
import { LogOutComponent } from './layout/header/right-menu/log-out/log-out.component';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NavLinkTopComponent } from './components/nav-link-top/nav-link-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideNavComponent,
    LogoComponentComponent,
    HamburgerComponentComponent,
    RightMenuComponent,
    LeftMenuComponent,
    LoggedComponent,
    LogOutComponent,
    DecoratorComponent,
    PageHeaderComponent,
    NavLinkTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
