import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../../src/app.module';
import * as request from 'supertest';

describe('RestTemplateFileResource', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should test template file module', async () => {
    const response = await request(app.getHttpServer())
      .get(`/api/v1/test`)
      .expect(200);

    expect(response).toEqual('Hello World!');
  });
});
