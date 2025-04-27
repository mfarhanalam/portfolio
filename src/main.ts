import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as AOS from 'aos';
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
AOS.init({
  once: false,
  mirror: false,
  offset: 220,
  anchorPlacement: 'top-bottom'
}); 
