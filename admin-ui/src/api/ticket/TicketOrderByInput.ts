import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  companyIdId?: SortOrder;
  createdAt?: SortOrder;
  equipmentIdId?: SortOrder;
  id?: SortOrder;
  isPrimeCustomer?: SortOrder;
  nameOfCustomer?: SortOrder;
  nameOfEquipment?: SortOrder;
  requisitionDate?: SortOrder;
  requisitionDetails?: SortOrder;
  requisitionType?: SortOrder;
  taskPlannersId?: SortOrder;
  ticketStatus?: SortOrder;
  updatedAt?: SortOrder;
};
