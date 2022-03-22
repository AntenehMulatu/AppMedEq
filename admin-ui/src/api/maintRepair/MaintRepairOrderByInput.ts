import { SortOrder } from "../../util/SortOrder";

export type MaintRepairOrderByInput = {
  actionTaken?: SortOrder;
  companyIdId?: SortOrder;
  createdAt?: SortOrder;
  dateOfCeoApproval?: SortOrder;
  equipmentIdId?: SortOrder;
  faultType?: SortOrder;
  id?: SortOrder;
  lasttimeOfGoodOperation?: SortOrder;
  nameOfBmeApprovedMaintClearance?: SortOrder;
  nameOfTechMaintainEq?: SortOrder;
  possibleCause?: SortOrder;
  updatedAt?: SortOrder;
};
