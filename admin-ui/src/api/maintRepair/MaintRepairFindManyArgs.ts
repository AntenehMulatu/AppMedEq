import { MaintRepairWhereInput } from "./MaintRepairWhereInput";
import { MaintRepairOrderByInput } from "./MaintRepairOrderByInput";

export type MaintRepairFindManyArgs = {
  where?: MaintRepairWhereInput;
  orderBy?: Array<MaintRepairOrderByInput>;
  skip?: number;
  take?: number;
};
