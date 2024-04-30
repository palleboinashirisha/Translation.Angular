import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageEnum } from '../app/enums/languageEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translation';

languageEnum = LanguageEnum;
selectedLanguage: LanguageEnum = LanguageEnum.English;

constructor(public translate: TranslateService) {}

changeLanguage(language: LanguageEnum): void {
  this.translate.use(language);
  this.selectedLanguage = language;
}
  
}
