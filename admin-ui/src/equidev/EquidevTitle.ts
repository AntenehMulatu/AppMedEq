import { Equidev as TEquidev } from "../api/equidev/Equidev";

export const EQUIDEV_TITLE_FIELD = "manufacturerName";

export const EquidevTitle = (record: TEquidev): string => {
  return record.manufacturerName || record.id;
};
