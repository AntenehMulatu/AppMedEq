import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EquipmentSaleWhereUniqueInput } from "../equipmentSale/EquipmentSaleWhereUniqueInput";
import { InstallationWhereUniqueInput } from "../installation/InstallationWhereUniqueInput";
import { MaintRepairCreateNestedManyWithoutEquidevsInput } from "./MaintRepairCreateNestedManyWithoutEquidevsInput";
import { SparePartCreateNestedManyWithoutEquidevsInput } from "./SparePartCreateNestedManyWithoutEquidevsInput";
import { TicketCreateNestedManyWithoutEquidevsInput } from "./TicketCreateNestedManyWithoutEquidevsInput";

export type EquidevCreateInput = {
  companyId?: CompanyWhereUniqueInput | null;
  countryOfOrign?: string | null;
  equipmentSales?: EquipmentSaleWhereUniqueInput | null;
  hasSparePart?: boolean | null;
  installations?: InstallationWhereUniqueInput;
  maintRepairs?: MaintRepairCreateNestedManyWithoutEquidevsInput;
  manufacturerName?: string | null;
  model?: string | null;
  serialNumber?: string | null;
  shipmentArrivalDate?: Date | null;
  spareParts?: SparePartCreateNestedManyWithoutEquidevsInput;
  tickets?: TicketCreateNestedManyWithoutEquidevsInput;
};
