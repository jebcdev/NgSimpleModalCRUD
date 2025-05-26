import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { v4 as uuid } from 'uuid';

import {
  iContact,
  iContactsPaginatedResponse,
  iPaginationParams,
} from '../interfaces';
import { environment } from '../../environments/environment';
import { delay, Observable, tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

const API_URL = `${environment.apiUrl}/contacts`;
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private _http: HttpClient = inject(HttpClient);

  // Signal para manejar los parámetros de paginación
  public paginationParams = signal<iPaginationParams>({
    page: 1,
    perPage: 25,
  });

  public contactsRs = rxResource({
    request: () => this.paginationParams(),
    loader: ({ request }) => this.getData(request.page, request.perPage),
  });

  public getData(
    page: number = 1,
    perPage: number = 25
  ): Observable<iContactsPaginatedResponse> {
    const params = {
      _page: page.toString(),
      _per_page: perPage.toString(),
    };
    return this._http.get<iContactsPaginatedResponse>(API_URL, { params }).pipe(
      delay(500) // Simulate a delay for loading
    );
  }

  public create(data: iContact): Observable<iContact> {
    const newContact: iContact = {
      ...data,
      id: uuid(),
    };
    return this._http.post<iContact>(API_URL, newContact).pipe(
      // Después de crear, recarga los datos
      tap(() => this.contactsRs.reload())
    );
  }

  public updateById(data: iContact) {
    return this._http.put<iContact>(`${API_URL}/${data.id}`, data).pipe(
      // Después de actualizar, recarga los datos
      tap(() => this.contactsRs.reload())
    );
  }

  public deleteById(id: string) {
    return this._http.delete<iContact>(`${API_URL}/${id}`).pipe(
      // Después de eliminar, recarga los datos
      tap(() => this.contactsRs.reload())
    );
  }

  // Métodos para manejar la paginación
  public goToPage(page: number) {
    this.paginationParams.update((params) => ({ ...params, page }));
  }

  public changePerPage(perPage: number) {
    this.paginationParams.update((params) => ({ ...params, perPage, page: 1 }));
  }

  public nextPage() {
    const currentPage = this.paginationParams().page;
    this.goToPage(currentPage + 1);
  }

  public prevPage() {
    const currentPage = this.paginationParams().page;
    if (currentPage > 1) {
      this.goToPage(currentPage - 1);
    }
  }
}
