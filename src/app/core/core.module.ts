import { NgModule, SkipSelf, Optional } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule} from '@angular/common/http';
import { MatIconRegistry} from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';
import {loadSvgResources} from '../utils/svg-utils';
import { SharedModule} from '../shared/shared.module';
import { LoginModule} from '../login/login.module';

@NgModule({
  imports: [ HttpClientModule , SharedModule, LoginModule],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(@Optional()@SkipSelf()private core: CoreModule, matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    if (core) {
      throw new Error('已经加载过了');
    }
    loadSvgResources(matIconRegistry, sanitizer);
  }
 }

