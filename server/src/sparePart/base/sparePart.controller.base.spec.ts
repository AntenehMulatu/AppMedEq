import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { SparePartController } from "../sparePart.controller";
import { SparePartService } from "../sparePart.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  estimatedExpireDate: new Date(),
  hasSerialNumber: "true",
  id: "exampleId",
  nameOfSparePart: "exampleNameOfSparePart",
  partNumber: "examplePartNumber",
  serialNumber: "exampleSerialNumber",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  estimatedExpireDate: new Date(),
  hasSerialNumber: "true",
  id: "exampleId",
  nameOfSparePart: "exampleNameOfSparePart",
  partNumber: "examplePartNumber",
  serialNumber: "exampleSerialNumber",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    estimatedExpireDate: new Date(),
    hasSerialNumber: "true",
    id: "exampleId",
    nameOfSparePart: "exampleNameOfSparePart",
    partNumber: "examplePartNumber",
    serialNumber: "exampleSerialNumber",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  estimatedExpireDate: new Date(),
  hasSerialNumber: "true",
  id: "exampleId",
  nameOfSparePart: "exampleNameOfSparePart",
  partNumber: "examplePartNumber",
  serialNumber: "exampleSerialNumber",
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

describe("SparePart", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SparePartService,
          useValue: service,
        },
      ],
      controllers: [SparePartController],
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

  test("POST /spareParts", async () => {
    await request(app.getHttpServer())
      .post("/spareParts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        estimatedExpireDate: CREATE_RESULT.estimatedExpireDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /spareParts", async () => {
    await request(app.getHttpServer())
      .get("/spareParts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          estimatedExpireDate: FIND_MANY_RESULT[0].estimatedExpireDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /spareParts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/spareParts"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /spareParts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/spareParts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        estimatedExpireDate: FIND_ONE_RESULT.estimatedExpireDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
