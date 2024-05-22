import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { DataService } from '../../../services/data.service';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  stacks: any[] = [];
  categories: any[] = [];
  curriculums: any[] = [];
  logoDark: string = './../../../assets/logo/primary-logo.png';
  logoLight: string = './../../../assets/logo/secondary-logo.png';

  constructor(
    public languageService: LanguageService,
    private dataService: DataService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.dataService.getCurriculums().subscribe((curriculums) => {
      this.curriculums = curriculums;
    });
  }

  getCurriculumImageUrl(curriculumName: string): string {
    const curriculum = this.curriculums.find(
      (curriculum) => curriculum.curriculum_name === curriculumName
    );
    if (curriculum) {
      return curriculum.curriculum_link;
    }
    return '';
  }
  openCurriculumInNewTab(): void {
    const curriculumName =
      this.languageService.selectedLanguage === 'fr'
        ? 'curriculum'
        : 'curriculum_en';
    const curriculumUrl = this.getCurriculumImageUrl(curriculumName);
    if (curriculumUrl) {
      window.open(curriculumUrl, '_blank');
    }
  }
  goToContact() {
    const contact = document.getElementById('contact-section');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  getLogoSrc() {
    return this.themeService.isDarkMode ? this.logoDark : this.logoLight;
  }
}
