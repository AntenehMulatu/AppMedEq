import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { EquidevWhereUniqueInput } from "../equidev/EquidevWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SparePartWhereInput = {
  companyId?: CompanyWhereUniqueInput;
  equipmentId?: EquidevWhereUniqueInput;
  estimatedExpireDate?: DateTimeNullableFilter;
  hasSerialNumber?: BooleanNullableFilter;
  id?: StringFilter;
  nameOfSparePart?: StringNullableFilter;
  partNumber?: StringNullableFilter;
  serialNumber?: StringNullableFilter;
};
