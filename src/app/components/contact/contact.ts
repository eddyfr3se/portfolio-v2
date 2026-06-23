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

  private mailUrl = 'https://christopherrauch.de/sendMail.php';

  sent = false;
  error = false;

  contactForm = this.fb.group({
    name: ['', { validators: Validators.required, updateOn: 'blur' }],
    email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
    message: ['', { validators: Validators.required, updateOn: 'blur' }],
    privacy: [false, Validators.requiredTrue],
  });

  get name() {
    return this.contactForm.controls.name;
  }

  get email() {
    return this.contactForm.controls.email;
  }

  get message() {
    return this.contactForm.controls.message;
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sent = false;
    this.error = false;

    const { name, email, message } = this.contactForm.value;

    try {
      const response = await fetch(this.mailUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      this.error = true;
    }
  }
}
