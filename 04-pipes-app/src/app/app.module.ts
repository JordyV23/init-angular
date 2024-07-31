import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


// Configuracion del Locale
import localeEsHN from "@angular/common/locales/es-HN";
import localeDeDU from "@angular/common/locales/de";
import localeFrCa from "@angular/common/locales/fr-CA";
import { registerLocaleData } from "@angular/common";

// El uso de un local, afecta el formato de los pipes
registerLocaleData(localeEsHN)
registerLocaleData(localeDeDU)
registerLocaleData(localeFrCa)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
