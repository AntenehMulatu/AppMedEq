import { SortOrder } from "../../util/SortOrder";

export type InstallationOrderByInput = {
  commissionDate?: SortOrder;
  companyIdId?: SortOrder;
  createdAt?: SortOrder;
  equipmentIdId?: SortOrder;
  id?: SortOrder;
  installationStartDate?: SortOrder;
  nameOfCompanyEqInstalled?: SortOrder;
  nameOfTechnicalEngineerInstalled?: SortOrder;
  updatedAt?: SortOrder;
};
