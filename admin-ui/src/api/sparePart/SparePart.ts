import { Company } from "../company/Company";
import { Equidev } from "../equidev/Equidev";

export type SparePart = {
  companyId?: Company | null;
  createdAt: Date;
  equipmentId?: Equidev | null;
  estimatedExpireDate: Date | null;
  hasSerialNumber: boolean | null;
  id: string;
  nameOfSparePart: string | null;
  partNumber: string | null;
  serialNumber: string | null;
  updatedAt: Date;
};
