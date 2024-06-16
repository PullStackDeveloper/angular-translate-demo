import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Languages} from './config/translate.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private languages = Languages;
  constructor(private translate: TranslateService) {
     this.loadLanguage();
  }
  loadLanguage() {
    const browserLang = this.translate.getBrowserLang(); // en
    console.log('browserLang', browserLang);
    const browserCultureLang  = this.translate.getBrowserCultureLang(); // en-US or en-GB
    const defaultLang = this.languages.some(lang => lang.code === browserCultureLang) ? browserCultureLang : 'en-US'; // Filter out the default language
    console.log('defaultLang', defaultLang);
    this.translate.addLangs(this.languages.map(lang => lang.code));
    this.translate.setDefaultLang(defaultLang ? defaultLang : 'en-US');
    this.translate.use(defaultLang ? defaultLang : 'en-US');
  }
}
