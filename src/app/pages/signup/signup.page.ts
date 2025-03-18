import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonText,
  IonSpinner,
  IonIcon,
  IonCard,
  IonInputPasswordToggle,
  IonLabel,
  IonInput,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, personOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonToolbar,
    IonHeader,
    IonCard,
    IonLabel,
    IonSpinner,
    IonText,
    IonButton,
    IonIcon,
    IonInput,
    IonInputPasswordToggle,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class SignupPage implements OnInit {
  form!: FormGroup;
  isSignup = signal<boolean>(false);

  constructor() {
    addIcons({
      mailOutline,
      lockClosedOutline,
      personOutline
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required],
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }
}
