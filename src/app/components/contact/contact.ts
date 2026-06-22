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

  // schickt das Formular an das PHP-Skript auf meiner Domain
  private mailUrl = 'https://christopherrauch.de/sendMail.php';

  // wird true, sobald erfolgreich abgeschickt wurde
  sent = false;
  // wird true, wenn das Senden fehlschlägt
  error = false;

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

  // async, weil wir await fetch(...) und await response.json() nutzen
  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sent = false;
    this.error = false;

    const { name, email, message } = this.contactForm.value;

    try {
      // schickt die Daten als JSON an das PHP-Skript auf dem Server
      const response = await fetch(this.mailUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // die Keys müssen 1:1 so heißen wie in der PHP (name, email, message)
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (result.success) {
        this.sent = true;
        this.contactForm.reset();
      } else {
        this.error = true;
      }
    } catch (e) {
      // z.B. kein Netz oder Server nicht erreichbar
      this.error = true;
    }
  }
}
