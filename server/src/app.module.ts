import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { CompanyModule } from "./company/company.module";
import { EmployeeModule } from "./employee/employee.module";
import { EquidevModule } from "./equidev/equidev.module";
import { EquipmentSaleModule } from "./equipmentSale/equipmentSale.module";
import { InstallationModule } from "./installation/installation.module";
import { MaintRepairModule } from "./maintRepair/maintRepair.module";
import { SparePartModule } from "./sparePart/sparePart.module";
import { TaskPlannerModule } from "./taskPlanner/taskPlanner.module";
import { TicketModule } from "./ticket/ticket.module";
import { CompanyTypeModule } from "./companyType/companyType.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { MorganModule } from "nest-morgan";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    CompanyModule,
    EmployeeModule,
    EquidevModule,
    EquipmentSaleModule,
    InstallationModule,
    MaintRepairModule,
    SparePartModule,
    TaskPlannerModule,
    TicketModule,
    CompanyTypeModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
