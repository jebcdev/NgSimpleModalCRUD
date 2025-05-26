import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { iContact } from '../../../../interfaces';
import { ContactsPageEditFormComponent } from '../forms/edit/contacts-page-edit-form.component';
import { toast } from 'ngx-sonner';
import { ContactsService } from '../../../../services/contacts.service';

@Component({
  selector: 'contacs-page-table',
  imports: [ContactsPageEditFormComponent],
  templateUrl: './contacs-page-table.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContacsPageTableComponent {
  contacts = input.required<iContact[]>(); // Using input to receive contacts data from parent component

  private _contactsService: ContactsService = inject(ContactsService);
  public currentContact = signal<iContact | undefined>(undefined);

  onEdit(contact: iContact) {
    const modal = document.getElementById(
      'contacts-form-modal'
    ) as HTMLDialogElement;
    if (modal) {
      this.currentContact.set(contact);
      modal.showModal();
    }
  }

  onDelete(id: string) {
    try {
      this._contactsService.deleteById(id).subscribe({
        next: () => {
          toast.success('Contacto Borrado', {
            description: 'El contacto ha sido borrado correctamente',
          });
          this._contactsService.contactsRs.reload();
        },
        error: () => {
          toast.error('Error Borrando Contacto', {
            description: 'No se ha podido borrar el contacto',
          });
        },
      });
    } catch (error) {
      console.error(error);
      toast.error('Error Borrando Contacto', {
        description: 'No se ha podido borrar el contacto',
      });
    }
  }
}
