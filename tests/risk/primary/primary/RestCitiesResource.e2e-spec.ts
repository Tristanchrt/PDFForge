import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../../src/app.module';
import * as request from 'supertest';

describe('Rest Cities resource', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should get cities from party', async () => {
    const response = await request(app.getHttpServer())
      .get(`/api/v1/cities/available`)
      .expect(200);

    // TODO
    expect(response.body.cities.length).toEqual(29);
  });
});
