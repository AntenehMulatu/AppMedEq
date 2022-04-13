import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { TaskPlannerController } from "../taskPlanner.controller";
import { TaskPlannerService } from "../taskPlanner.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  employeeAssigned: "exampleEmployeeAssigned",
  id: "exampleId",
  taskEndDate: new Date(),
  taskStartDate: new Date(),
  ticketNumber: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  employeeAssigned: "exampleEmployeeAssigned",
  id: "exampleId",
  taskEndDate: new Date(),
  taskStartDate: new Date(),
  ticketNumber: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    employeeAssigned: "exampleEmployeeAssigned",
    id: "exampleId",
    taskEndDate: new Date(),
    taskStartDate: new Date(),
    ticketNumber: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  employeeAssigned: "exampleEmployeeAssigned",
  id: "exampleId",
  taskEndDate: new Date(),
  taskStartDate: new Date(),
  ticketNumber: 42,
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

describe("TaskPlanner", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TaskPlannerService,
          useValue: service,
        },
      ],
      controllers: [TaskPlannerController],
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

  test("POST /taskPlanners", async () => {
    await request(app.getHttpServer())
      .post("/taskPlanners")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        taskEndDate: CREATE_RESULT.taskEndDate.toISOString(),
        taskStartDate: CREATE_RESULT.taskStartDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /taskPlanners", async () => {
    await request(app.getHttpServer())
      .get("/taskPlanners")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          taskEndDate: FIND_MANY_RESULT[0].taskEndDate.toISOString(),
          taskStartDate: FIND_MANY_RESULT[0].taskStartDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /taskPlanners/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/taskPlanners"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /taskPlanners/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/taskPlanners"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        taskEndDate: FIND_ONE_RESULT.taskEndDate.toISOString(),
        taskStartDate: FIND_ONE_RESULT.taskStartDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
