import { SparePartWhereInput } from "./SparePartWhereInput";
import { SparePartOrderByInput } from "./SparePartOrderByInput";

export type SparePartFindManyArgs = {
  where?: SparePartWhereInput;
  orderBy?: Array<SparePartOrderByInput>;
  skip?: number;
  take?: number;
};
