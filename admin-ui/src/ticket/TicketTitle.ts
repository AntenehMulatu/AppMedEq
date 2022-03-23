import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "nameOfCustomer";

export const TicketTitle = (record: TTicket): string => {
  return record.nameOfCustomer || record.id;
};
