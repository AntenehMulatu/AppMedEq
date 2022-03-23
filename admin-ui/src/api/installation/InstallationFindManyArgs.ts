import { InstallationWhereInput } from "./InstallationWhereInput";
import { InstallationOrderByInput } from "./InstallationOrderByInput";

export type InstallationFindManyArgs = {
  where?: InstallationWhereInput;
  orderBy?: Array<InstallationOrderByInput>;
  skip?: number;
  take?: number;
};
