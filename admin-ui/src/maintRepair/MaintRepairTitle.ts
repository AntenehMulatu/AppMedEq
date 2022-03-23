import { MaintRepair as TMaintRepair } from "../api/maintRepair/MaintRepair";

export const MAINTREPAIR_TITLE_FIELD = "nameOfBmeApprovedMaintClearance";

export const MaintRepairTitle = (record: TMaintRepair): string => {
  return record.nameOfBmeApprovedMaintClearance || record.id;
};
