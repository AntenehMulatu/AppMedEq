import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EquipmentSaleWhereUniqueInput } from "../equipmentSale/EquipmentSaleWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstallationWhereUniqueInput } from "../installation/InstallationWhereUniqueInput";
import { MaintRepairListRelationFilter } from "../maintRepair/MaintRepairListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SparePartListRelationFilter } from "../sparePart/SparePartListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type EquidevWhereInput = {
  companyId?: CompanyWhereUniqueInput;
  countryOfOrign?: StringNullableFilter;
  equipmentSales?: EquipmentSaleWhereUniqueInput;
  hasSparePart?: BooleanNullableFilter;
  id?: StringFilter;
  installations?: InstallationWhereUniqueInput;
  maintRepairs?: MaintRepairListRelationFilter;
  manufacturerName?: StringNullableFilter;
  model?: StringNullableFilter;
  serialNumber?: StringNullableFilter;
  shipmentArrivalDate?: DateTimeNullableFilter;
  spareParts?: SparePartListRelationFilter;
  tickets?: TicketListRelationFilter;
};
