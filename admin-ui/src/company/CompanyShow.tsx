import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "./CompanyTitle";
import { EQUIPMENTSALE_TITLE_FIELD } from "../equipmentSale/EquipmentSaleTitle";
import { INSTALLATION_TITLE_FIELD } from "../installation/InstallationTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { EQUIDEV_TITLE_FIELD } from "../equidev/EquidevTitle";
import { TASKPLANNER_TITLE_FIELD } from "../taskPlanner/TaskPlannerTitle";
import { COMPANYTYPE_TITLE_FIELD } from "../companyType/CompanyTypeTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="CompanyAddress" source="companyAddress" />
        <TextField label="CompanyDepartment" source="companyDepartment" />
        <TextField label="CompanyName" source="companyName" />
        <TextField label="CompanyPhone" source="companyPhone" />
        <ReferenceField
          label="CompanyType"
          source="companytype.id"
          reference="CompanyType"
        >
          <TextField source={COMPANYTYPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Employee"
          target="CompanyId"
          label="Employees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CompanyId"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="EmployeeAge" source="employeeAge" />
            <TextField label="EmployeeDepartment" source="employeeDepartment" />
            <TextField label="EmployeeEmail" source="employeeEmail" />
            <TextField label="EmployeeName" source="employeeName" />
            <TextField label="EmployeePhone" source="employeePhone" />
            <TextField label="EmployeePosition" source="employeePosition" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Equidev"
          target="CompanyId"
          label="Equidevs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CompanyId"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="CountryOfOrign" source="countryOfOrign" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EquipmentSales"
              source="equipmentsale.id"
              reference="EquipmentSale"
            >
              <TextField source={EQUIPMENTSALE_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="HasSparePart" source="hasSparePart" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Installations"
              source="installation.id"
              reference="Installation"
            >
              <TextField source={INSTALLATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ManufacturerName" source="manufacturerName" />
            <TextField label="Model" source="model" />
            <TextField label="SerialNumber" source="serialNumber" />
            <TextField
              label="ShipmentArrivalDate"
              source="shipmentArrivalDate"
            />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EquipmentSale"
          target="CompanyId"
          label="EquipmentSales"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CompanyId"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="DaysSoldtoCustomer" source="daysSoldtoCustomer" />
            <ReferenceField
              label="EmployeeId"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="NameOfSalesPerson" source="nameOfSalesPerson" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="ValueOfTransaction" source="valueOfTransaction" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Installation"
          target="CompanyId"
          label="Installations"
        >
          <Datagrid rowClick="show">
            <TextField label="CommissionDate" source="commissionDate" />
            <ReferenceField
              label="CompanyId"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EquipmentId"
              source="equidev.id"
              reference="Equidev"
            >
              <TextField source={EQUIDEV_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField
              label="InstallationStartDate"
              source="installationStartDate"
            />
            <TextField
              label="NameOfCompanyEqInstalled"
              source="nameOfCompanyEqInstalled"
            />
            <TextField
              label="NameOfTechnicalEngineerInstalled"
              source="nameOfTechnicalEngineerInstalled"
            />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MaintRepair"
          target="CompanyId"
          label="MaintRepairs"
        >
          <Datagrid rowClick="show">
            <TextField label="ActionTaken" source="actionTaken" />
            <ReferenceField
              label="CompanyId"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="DateOfCEOApproval" source="dateOfCeoApproval" />
            <ReferenceField
              label="EquipmentId"
              source="equidev.id"
              reference="Equidev"
            >
              <TextField source={EQUIDEV_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="FaultType" source="faultType" />
            <TextField label="ID" source="id" />
            <TextField
              label="LasttimeOfGoodOperation"
              source="lasttimeOfGoodOperation"
            />
            <TextField
              label="NameOfBMEApprovedMaintClearance"
              source="nameOfBmeApprovedMaintClearance"
            />
            <TextField
              label="NameOfTechMaintainEq"
              source="nameOfTechMaintainEq"
            />
            <TextField label="PossibleCause" source="possibleCause" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SparePart"
          target="CompanyId"
          label="SpareParts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CompanyId"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EquipmentId"
              source="equidev.id"
              reference="Equidev"
            >
              <TextField source={EQUIDEV_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="EstimatedExpireDate"
              source="estimatedExpireDate"
            />
            <BooleanField label="HasSerialNumber" source="hasSerialNumber" />
            <TextField label="ID" source="id" />
            <TextField label="NameOfSparePart" source="nameOfSparePart" />
            <TextField label="PartNumber" source="partNumber" />
            <TextField label="SerialNumber" source="serialNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Ticket"
          target="CompanyId"
          label="Tickets"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CompanyId"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EquipmentId"
              source="equidev.id"
              reference="Equidev"
            >
              <TextField source={EQUIDEV_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="isPrimeCustomer" source="isPrimeCustomer" />
            <TextField label="NameOfCustomer" source="nameOfCustomer" />
            <TextField label="NameOfEquipment" source="nameOfEquipment" />
            <TextField label="RequisitionDate" source="requisitionDate" />
            <TextField label="RequisitionDetails" source="requisitionDetails" />
            <TextField label="RequisitionType" source="requisitionType" />
            <ReferenceField
              label="TaskPlanners"
              source="taskplanner.id"
              reference="TaskPlanner"
            >
              <TextField source={TASKPLANNER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TicketStatus" source="ticketStatus" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
