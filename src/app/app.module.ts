import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LogDataMenuComponent } from './components/log-data-menu/log-data-menu.component';
import { BleedingDialogComponent } from './components/dialogs/bleeding-dialog/bleeding-dialog.component';
import { TemperatureDialogComponent } from './components/dialogs/temperature-dialog/temperature-dialog.component';
import { AppSettingsComponent } from './components/app-settings/app-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    LogDataMenuComponent,
    BleedingDialogComponent,
    TemperatureDialogComponent,
    AppSettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
