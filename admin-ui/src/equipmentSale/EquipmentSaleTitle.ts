import { EquipmentSale as TEquipmentSale } from "../api/equipmentSale/EquipmentSale";

export const EQUIPMENTSALE_TITLE_FIELD = "nameOfSalesPerson";

export const EquipmentSaleTitle = (record: TEquipmentSale): string => {
  return record.nameOfSalesPerson || record.id;
};
