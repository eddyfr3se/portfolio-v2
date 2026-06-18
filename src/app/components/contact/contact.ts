import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);

  // wird true, sobald erfolgreich abgeschickt wurde
  sent = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    // Checkbox muss angehakt sein
    privacy: [false, Validators.requiredTrue],
  });

  // kurze Zugriffe fürs Template (Fehlerprüfung)
  get name() {
    return this.contactForm.controls.name;
  }

  get email() {
    return this.contactForm.controls.email;
  }

  get message() {
    return this.contactForm.controls.message;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // (kein Backend – wir zeigen nur die Bestätigung und leeren das Formular)
    this.sent = true;
    this.contactForm.reset();
  }
}
