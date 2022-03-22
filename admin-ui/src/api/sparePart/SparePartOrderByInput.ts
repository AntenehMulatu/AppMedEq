import { SortOrder } from "../../util/SortOrder";

export type SparePartOrderByInput = {
  companyIdId?: SortOrder;
  createdAt?: SortOrder;
  equipmentIdId?: SortOrder;
  estimatedExpireDate?: SortOrder;
  hasSerialNumber?: SortOrder;
  id?: SortOrder;
  nameOfSparePart?: SortOrder;
  partNumber?: SortOrder;
  serialNumber?: SortOrder;
  updatedAt?: SortOrder;
};
