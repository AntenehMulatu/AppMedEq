import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EquidevWhereUniqueInput } from "../equidev/EquidevWhereUniqueInput";

export type SparePartCreateInput = {
  companyId?: CompanyWhereUniqueInput | null;
  equipmentId?: EquidevWhereUniqueInput | null;
  estimatedExpireDate?: Date | null;
  hasSerialNumber?: boolean | null;
  nameOfSparePart?: string | null;
  partNumber?: string | null;
  serialNumber?: string | null;
};
