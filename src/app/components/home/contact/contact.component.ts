import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  nom: string = '';
  email: string = '';
  sujet: string = '';
  message: string = '';
  showSuccessMessage: boolean = false;

  constructor(public languageService: LanguageService) {}
}
