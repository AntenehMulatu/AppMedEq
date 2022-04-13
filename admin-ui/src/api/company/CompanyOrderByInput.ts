import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  companyAddress?: SortOrder;
  companyDepartment?: SortOrder;
  companyName?: SortOrder;
  companyPhone?: SortOrder;
  companyTypeId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
