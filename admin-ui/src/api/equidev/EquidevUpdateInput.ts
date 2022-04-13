import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EquipmentSaleWhereUniqueInput } from "../equipmentSale/EquipmentSaleWhereUniqueInput";
import { InstallationWhereUniqueInput } from "../installation/InstallationWhereUniqueInput";
import { MaintRepairUpdateManyWithoutEquidevsInput } from "./MaintRepairUpdateManyWithoutEquidevsInput";
import { SparePartUpdateManyWithoutEquidevsInput } from "./SparePartUpdateManyWithoutEquidevsInput";
import { TicketUpdateManyWithoutEquidevsInput } from "./TicketUpdateManyWithoutEquidevsInput";

export type EquidevUpdateInput = {
  companyId?: CompanyWhereUniqueInput | null;
  countryOfOrign?: string | null;
  equipmentSales?: EquipmentSaleWhereUniqueInput | null;
  hasSparePart?: boolean | null;
  installations?: InstallationWhereUniqueInput;
  maintRepairs?: MaintRepairUpdateManyWithoutEquidevsInput;
  manufacturerName?: string | null;
  model?: string | null;
  serialNumber?: string | null;
  shipmentArrivalDate?: Date | null;
  spareParts?: SparePartUpdateManyWithoutEquidevsInput;
  tickets?: TicketUpdateManyWithoutEquidevsInput;
};
