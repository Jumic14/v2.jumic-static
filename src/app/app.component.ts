import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';
import { ThemeService } from './services/theme.service';
import { animateHeader } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [animateHeader],
})
export class AppComponent {
  title = 'v1-jumic';

  constructor(
    public languageService: LanguageService,
    private themeService: ThemeService
  ) {}

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }

  isDarkMode(): boolean {
    return this.themeService.isDark();
  }
}
