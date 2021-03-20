import { Component, OnInit } from '@angular/core';
import { RandomizerService } from '../randomizer.service';
import { PasswordOptions } from '../PasswordOptions'

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  constructor(private randomizerService: RandomizerService) { }

  ngOnInit(): void {
    this.generatePassword();
  }

  generatedPassword: string;

  passwordOptions: PasswordOptions = {
    length: 16,
    includeSymbols: false,
    includeNumbers: true
  };

  generatePassword(): void {

    this.randomizerService
      .generatePassword(this.passwordOptions.length, this.passwordOptions.includeNumbers, this.passwordOptions.includeSymbols)
      .subscribe(password => this.generatedPassword = password);
  }

  copyToClipboard(): void {
    const el = document.createElement('textarea');
    el.value = this.generatedPassword;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

}
