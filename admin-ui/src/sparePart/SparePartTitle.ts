import { SparePart as TSparePart } from "../api/sparePart/SparePart";

export const SPAREPART_TITLE_FIELD = "nameOfSparePart";

export const SparePartTitle = (record: TSparePart): string => {
  return record.nameOfSparePart || record.id;
};
