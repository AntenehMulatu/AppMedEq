import { CompanyType } from "../companyType/CompanyType";
import { Employee } from "../employee/Employee";
import { Equidev } from "../equidev/Equidev";
import { EquipmentSale } from "../equipmentSale/EquipmentSale";
import { Installation } from "../installation/Installation";
import { MaintRepair } from "../maintRepair/MaintRepair";
import { SparePart } from "../sparePart/SparePart";
import { Ticket } from "../ticket/Ticket";

export type Company = {
  companyAddress: string | null;
  companyDepartment: string;
  companyName: string;
  companyPhone: number;
  companyType?: CompanyType | null;
  createdAt: Date;
  employees?: Array<Employee>;
  equipments?: Array<Equidev>;
  equipmentSales?: Array<EquipmentSale>;
  id: string;
  installations?: Array<Installation>;
  maintRepairs?: Array<MaintRepair>;
  spareParts?: Array<SparePart>;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
