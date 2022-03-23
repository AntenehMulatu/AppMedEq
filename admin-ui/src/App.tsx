import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { EquidevList } from "./equidev/EquidevList";
import { EquidevCreate } from "./equidev/EquidevCreate";
import { EquidevEdit } from "./equidev/EquidevEdit";
import { EquidevShow } from "./equidev/EquidevShow";
import { EquipmentSaleList } from "./equipmentSale/EquipmentSaleList";
import { EquipmentSaleCreate } from "./equipmentSale/EquipmentSaleCreate";
import { EquipmentSaleEdit } from "./equipmentSale/EquipmentSaleEdit";
import { EquipmentSaleShow } from "./equipmentSale/EquipmentSaleShow";
import { InstallationList } from "./installation/InstallationList";
import { InstallationCreate } from "./installation/InstallationCreate";
import { InstallationEdit } from "./installation/InstallationEdit";
import { InstallationShow } from "./installation/InstallationShow";
import { MaintRepairList } from "./maintRepair/MaintRepairList";
import { MaintRepairCreate } from "./maintRepair/MaintRepairCreate";
import { MaintRepairEdit } from "./maintRepair/MaintRepairEdit";
import { MaintRepairShow } from "./maintRepair/MaintRepairShow";
import { SparePartList } from "./sparePart/SparePartList";
import { SparePartCreate } from "./sparePart/SparePartCreate";
import { SparePartEdit } from "./sparePart/SparePartEdit";
import { SparePartShow } from "./sparePart/SparePartShow";
import { TaskPlannerList } from "./taskPlanner/TaskPlannerList";
import { TaskPlannerCreate } from "./taskPlanner/TaskPlannerCreate";
import { TaskPlannerEdit } from "./taskPlanner/TaskPlannerEdit";
import { TaskPlannerShow } from "./taskPlanner/TaskPlannerShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"my App"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Equidev"
          list={EquidevList}
          edit={EquidevEdit}
          create={EquidevCreate}
          show={EquidevShow}
        />
        <Resource
          name="EquipmentSale"
          list={EquipmentSaleList}
          edit={EquipmentSaleEdit}
          create={EquipmentSaleCreate}
          show={EquipmentSaleShow}
        />
        <Resource
          name="Installation"
          list={InstallationList}
          edit={InstallationEdit}
          create={InstallationCreate}
          show={InstallationShow}
        />
        <Resource
          name="MaintRepair"
          list={MaintRepairList}
          edit={MaintRepairEdit}
          create={MaintRepairCreate}
          show={MaintRepairShow}
        />
        <Resource
          name="SparePart"
          list={SparePartList}
          edit={SparePartEdit}
          create={SparePartCreate}
          show={SparePartShow}
        />
        <Resource
          name="TaskPlanner"
          list={TaskPlannerList}
          edit={TaskPlannerEdit}
          create={TaskPlannerCreate}
          show={TaskPlannerShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
      </Admin>
    </div>
  );
};

export default App;
