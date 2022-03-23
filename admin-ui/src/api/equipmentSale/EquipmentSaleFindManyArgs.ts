import { EquipmentSaleWhereInput } from "./EquipmentSaleWhereInput";
import { EquipmentSaleOrderByInput } from "./EquipmentSaleOrderByInput";

export type EquipmentSaleFindManyArgs = {
  where?: EquipmentSaleWhereInput;
  orderBy?: Array<EquipmentSaleOrderByInput>;
  skip?: number;
  take?: number;
};
