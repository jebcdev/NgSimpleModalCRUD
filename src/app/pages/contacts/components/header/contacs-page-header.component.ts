import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { iContact } from '../../../../interfaces';
import { ContactsPageCreateFormComponent } from '../forms/create/contacts-page-create-form.component';

@Component({
  selector: 'contacs-page-header',
  imports: [ContactsPageCreateFormComponent],
  templateUrl: './contacs-page-header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContacsPageHeaderComponent {
  public currentContact: iContact = {
    id: '',
    name: '',
    email: '',
    phone: '',
  };

  onCreate(contact: iContact) {
    const modal = document.getElementById(
      'contacts-create-form-modal'
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }
}
