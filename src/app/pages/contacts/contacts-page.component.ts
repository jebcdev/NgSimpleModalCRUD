import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  ContacsPageHeaderComponent,
  ContacsPageTableComponent,
  ContactsPagePaginationComponent,
} from './components';
import { ContactsService } from '../../services/contacts.service';
import {
  IsEmptyComponent,
  IsErrorComponent,
  IsLoadingComponent,
} from './../../components/resource-status';

@Component({
  selector: 'contacts-page',
  imports: [
    ContacsPageHeaderComponent,
    ContacsPageTableComponent,
    ContactsPagePaginationComponent,

    IsEmptyComponent,
    IsErrorComponent,
    IsLoadingComponent,
  ],
  templateUrl: './contacts-page.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsPageComponent {
  private _contactsService: ContactsService = inject(ContactsService);

  public contactsRs = this._contactsService.contactsRs;
}

export default ContactsPageComponent;
