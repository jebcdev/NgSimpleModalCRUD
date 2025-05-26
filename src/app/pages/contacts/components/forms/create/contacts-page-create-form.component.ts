import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContactsService } from '../../../../../services/contacts.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { iContact } from '../../../../../interfaces';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'contacts-page-create-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contacts-page-create-form.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsPageCreateFormComponent {
  constructor() {
    this.form.reset();
  }

  private _contactsService: ContactsService = inject(ContactsService);

  private _fb: FormBuilder = inject(FormBuilder);

  public form: FormGroup = this._fb.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const contact: iContact = this.form.value;
    
    this._contactsService.create(contact).subscribe({
      next: (response) => {
        toast.success('Contacto creado con éxito', {
          description: `El contacto ${response.name} ha sido creado.`,
        });
        this.form.reset();
        this._contactsService.contactsRs.reload();

        // Cerrar el modal
        const modal = document.getElementById(
          'contacts-create-form-modal'
        ) as HTMLDialogElement;
        if (modal) {
          modal.close();
        }
      },
      error: (error) => {
        toast.error('Error al crear el contacto', {
          description: 'No se pudo crear el contacto. Inténtalo de nuevo.',
        });
      },
    });
  }

  getFieldError(fieldName: string): string | null {
    const field = this.form.get(fieldName);
    if (field?.invalid && (field?.dirty || field?.touched)) {
      if (field.errors?.['required']) {
        return `${fieldName} es requerido`;
      }
      if (field.errors?.['email']) {
        return 'Email inválido';
      }
      if (field.errors?.['minlength']) {
        return `${fieldName} debe tener al menos ${field.errors['minlength'].requiredLength} caracteres`;
      }
      if (field.errors?.['pattern']) {
        return 'Teléfono debe contener solo números y al menos 10 dígitos';
      }
    }
    return null;
  }
}
