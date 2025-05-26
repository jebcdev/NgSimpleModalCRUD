import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { iContactsPaginatedResponse } from '../../../../interfaces';
import { ContactsService } from '../../../../services/contacts.service';

@Component({
  selector: 'contacts-page-pagination',
  imports: [],
  templateUrl: './contacts-page-pagination.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsPagePaginationComponent {
  paginationData = input.required<iContactsPaginatedResponse>();

  private _contactsService = inject(ContactsService);

  protected readonly Math = Math;

  get currentPage() {
    return this._contactsService.paginationParams().page;
  }

  get perPage() {
    return this._contactsService.paginationParams().perPage;
  }

  onPageChange(page: number) {
    this._contactsService.goToPage(page);
  }

  onPerPageChange(perPage: number) {
    this._contactsService.changePerPage(perPage);
  }

  onPrevPage() {
    this._contactsService.prevPage();
  }

  onNextPage() {
    this._contactsService.nextPage();
  }

  // Genera array de páginas para mostrar en la paginación
  getPageNumbers(): number[] {
    const totalPages = this.paginationData().pages;
    const currentPage = this.currentPage;
    const pages: number[] = [];

    // Mostrar máximo 5 páginas
    const maxPages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(totalPages, startPage + maxPages - 1);

    // Ajustar si estamos cerca del final
    if (endPage - startPage < maxPages - 1) {
      startPage = Math.max(1, endPage - maxPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  onPerPageChangeEvent(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.onPerPageChange(+target.value);
    }
  }
}
