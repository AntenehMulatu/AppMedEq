import { EquidevWhereInput } from "./EquidevWhereInput";
import { EquidevOrderByInput } from "./EquidevOrderByInput";

export type EquidevFindManyArgs = {
  where?: EquidevWhereInput;
  orderBy?: Array<EquidevOrderByInput>;
  skip?: number;
  take?: number;
};
