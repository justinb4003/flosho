import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LogDataMenuComponent } from './components/log-data-menu/log-data-menu.component';
import { AppSettingsComponent } from './components/app-settings/app-settings.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'settings', component: AppSettingsComponent },
  { path: 'log-data-menu', component: LogDataMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
