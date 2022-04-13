import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { EquipmentSaleController } from "../equipmentSale.controller";
import { EquipmentSaleService } from "../equipmentSale.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  daysSoldtoCustomer: new Date(),
  id: "exampleId",
  nameOfSalesPerson: "exampleNameOfSalesPerson",
  updatedAt: new Date(),
  valueOfTransaction: 42.42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  daysSoldtoCustomer: new Date(),
  id: "exampleId",
  nameOfSalesPerson: "exampleNameOfSalesPerson",
  updatedAt: new Date(),
  valueOfTransaction: 42.42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    daysSoldtoCustomer: new Date(),
    id: "exampleId",
    nameOfSalesPerson: "exampleNameOfSalesPerson",
    updatedAt: new Date(),
    valueOfTransaction: 42.42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  daysSoldtoCustomer: new Date(),
  id: "exampleId",
  nameOfSalesPerson: "exampleNameOfSalesPerson",
  updatedAt: new Date(),
  valueOfTransaction: 42.42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("EquipmentSale", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EquipmentSaleService,
          useValue: service,
        },
      ],
      controllers: [EquipmentSaleController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /equipmentSales", async () => {
    await request(app.getHttpServer())
      .post("/equipmentSales")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        daysSoldtoCustomer: CREATE_RESULT.daysSoldtoCustomer.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /equipmentSales", async () => {
    await request(app.getHttpServer())
      .get("/equipmentSales")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          daysSoldtoCustomer: FIND_MANY_RESULT[0].daysSoldtoCustomer.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /equipmentSales/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/equipmentSales"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /equipmentSales/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/equipmentSales"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        daysSoldtoCustomer: FIND_ONE_RESULT.daysSoldtoCustomer.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
