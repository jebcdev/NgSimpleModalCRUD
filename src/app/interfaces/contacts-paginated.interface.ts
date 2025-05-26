import iContact from "./contact.interface";

export interface iContactsPaginatedResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: iContact[];
}

export interface iPaginationParams {
  page: number;
  perPage: number;
}