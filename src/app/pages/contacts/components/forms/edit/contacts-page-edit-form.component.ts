import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { iContact } from '../../../../../interfaces';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactsService } from '../../../../../services/contacts.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'contacts-page-edit-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contacts-page-edit-form.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsPageEditFormComponent {
  constructor() {
    // Effect para actualizar el formulario cuando cambie currentContact
    effect(() => {
      const contact = this.currentContact();
      if (contact) {
        this.form.patchValue({
          id: contact.id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
        });
      } else {
        // Si no hay contacto, resetear el formulario
        this.form.reset();
      }
    });
  }
  currentContact = input<iContact | undefined>();

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
    this._contactsService.updateById(contact).subscribe({
      next: (response) => {
        toast.success('Contacto actualizado correctamente', {
          description: 'El contacto ha sido actualizado con éxito.',
        });
        this.form.reset();
        this._contactsService.contactsRs.reload();

        // Cerrar el modal
        const modal = document.getElementById(
          'contacts-form-modal'
        ) as HTMLDialogElement;
        if (modal) {
          modal.close();
        }
      },
      error: (error) => {
        toast.error('Error al actualizar el contacto', {
          description: 'No se pudo actualizar el contacto. Inténtalo de nuevo.',
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
