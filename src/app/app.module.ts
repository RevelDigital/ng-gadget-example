import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';

import { PlayerClientModule } from '@reveldigital/player-client';

import { AppComponent } from './app.component';

import localeFr from '@angular/common/locales/fr';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeFr);
registerLocaleData(localeRu);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlayerClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useFactory: () => {
        try {
          return new gadgets.Prefs().getLang();
        } catch {
          return 'en';
        }
      }
    },
    { provide: APP_BASE_HREF, useValue: '/gadgets/ifr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
