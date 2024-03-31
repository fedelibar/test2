import { ServiceBase } from '../base/ServiceBase';
import { BookingModel } from '../models/request/BookingModel';
import { BookingIdsResponse, BookingResponse } from '../models/responses';
export class BookingService extends ServiceBase {
  constructor() {
    super('/booking');
  }
  async getBookingIds(
    params: URLSearchParams = new URLSearchParams(),
  ): Promise<BookingIdsResponse[]> {
    return await this.get<BookingIdsResponse[]>(this.url, { params });
  }
  async getBooking(id: number): Promise<BookingResponse> {
    return await this.get<BookingResponse>(`${this.url}/${id}`);
  }
  async addBooking(booking: BookingModel): Promise<BookingResponse> {
    return await this.post<BookingResponse>(this.url, booking);
  }
  async updateBooking(
    id: number,
    booking: BookingModel,
  ): Promise<BookingResponse> {
    return await this.put<BookingResponse>(`${this.url}/${id}`, booking);
  }
  async partialUpdateBooking(
    id: number,
    booking: PartialBookingModel,
  ): Promise<BookingResponse> {
    return await this.patch<BookingResponse>(`${this.url}/${id}`, booking);
  }
  async deleteBooking(id: number): Promise<void> {
    return await this.delete<void>(`${this.url}/${id}`);
  }
}
