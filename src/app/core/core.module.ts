import { NgModule, SkipSelf, Optional } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent,SidebarComponent],
  exports: [HeaderComponent, FooterComponent,SidebarComponent]
})
export class CoreModule {
  constructor(@Optional()@SkipSelf()private core: CoreModule){
    if(core) {
      throw new Error('已经加载过了');
    }
  }
 }
