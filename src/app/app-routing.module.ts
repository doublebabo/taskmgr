import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: 'path', component: AppComponent
  },
  { path: 'project', redirectTo: '/project', pathMatch: 'full'},
  { path: 'tasklists', redirectTo: '/tasklists', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
