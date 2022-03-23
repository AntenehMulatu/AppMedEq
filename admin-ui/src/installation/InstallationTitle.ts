import { Installation as TInstallation } from "../api/installation/Installation";

export const INSTALLATION_TITLE_FIELD = "nameOfCompanyEqInstalled";

export const InstallationTitle = (record: TInstallation): string => {
  return record.nameOfCompanyEqInstalled || record.id;
};
