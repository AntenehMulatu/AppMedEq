import { Company } from "../company/Company";
import { EquipmentSale } from "../equipmentSale/EquipmentSale";
import { Installation } from "../installation/Installation";
import { MaintRepair } from "../maintRepair/MaintRepair";
import { SparePart } from "../sparePart/SparePart";
import { Ticket } from "../ticket/Ticket";

export type Equidev = {
  companyId?: Company | null;
  countryOfOrign: string | null;
  createdAt: Date;
  equipmentSales?: EquipmentSale | null;
  hasSparePart: boolean | null;
  id: string;
  installations?: Installation;
  maintRepairs?: Array<MaintRepair>;
  manufacturerName: string | null;
  model: string | null;
  serialNumber: string | null;
  shipmentArrivalDate: Date | null;
  spareParts?: Array<SparePart>;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
