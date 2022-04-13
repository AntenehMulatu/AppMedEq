import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { MaintRepairController } from "../maintRepair.controller";
import { MaintRepairService } from "../maintRepair.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  actionTaken: "exampleActionTaken",
  createdAt: new Date(),
  dateOfCeoApproval: new Date(),
  faultType: "exampleFaultType",
  id: "exampleId",
  lasttimeOfGoodOperation: new Date(),
  nameOfBmeApprovedMaintClearance: "exampleNameOfBmeApprovedMaintClearance",
  nameOfTechMaintainEq: "exampleNameOfTechMaintainEq",
  possibleCause: "examplePossibleCause",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  actionTaken: "exampleActionTaken",
  createdAt: new Date(),
  dateOfCeoApproval: new Date(),
  faultType: "exampleFaultType",
  id: "exampleId",
  lasttimeOfGoodOperation: new Date(),
  nameOfBmeApprovedMaintClearance: "exampleNameOfBmeApprovedMaintClearance",
  nameOfTechMaintainEq: "exampleNameOfTechMaintainEq",
  possibleCause: "examplePossibleCause",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    actionTaken: "exampleActionTaken",
    createdAt: new Date(),
    dateOfCeoApproval: new Date(),
    faultType: "exampleFaultType",
    id: "exampleId",
    lasttimeOfGoodOperation: new Date(),
    nameOfBmeApprovedMaintClearance: "exampleNameOfBmeApprovedMaintClearance",
    nameOfTechMaintainEq: "exampleNameOfTechMaintainEq",
    possibleCause: "examplePossibleCause",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  actionTaken: "exampleActionTaken",
  createdAt: new Date(),
  dateOfCeoApproval: new Date(),
  faultType: "exampleFaultType",
  id: "exampleId",
  lasttimeOfGoodOperation: new Date(),
  nameOfBmeApprovedMaintClearance: "exampleNameOfBmeApprovedMaintClearance",
  nameOfTechMaintainEq: "exampleNameOfTechMaintainEq",
  possibleCause: "examplePossibleCause",
  updatedAt: new Date(),
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

describe("MaintRepair", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MaintRepairService,
          useValue: service,
        },
      ],
      controllers: [MaintRepairController],
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

  test("POST /maintRepairs", async () => {
    await request(app.getHttpServer())
      .post("/maintRepairs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateOfCeoApproval: CREATE_RESULT.dateOfCeoApproval.toISOString(),
        lasttimeOfGoodOperation: CREATE_RESULT.lasttimeOfGoodOperation.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /maintRepairs", async () => {
    await request(app.getHttpServer())
      .get("/maintRepairs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateOfCeoApproval: FIND_MANY_RESULT[0].dateOfCeoApproval.toISOString(),
          lasttimeOfGoodOperation: FIND_MANY_RESULT[0].lasttimeOfGoodOperation.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /maintRepairs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/maintRepairs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /maintRepairs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/maintRepairs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateOfCeoApproval: FIND_ONE_RESULT.dateOfCeoApproval.toISOString(),
        lasttimeOfGoodOperation: FIND_ONE_RESULT.lasttimeOfGoodOperation.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
