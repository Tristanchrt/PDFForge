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

  it('should get my city', async () => {
    // Given: a user with id 2 with Lyon as city
    const userId = 2;
    const response = await request(app.getHttpServer())
      .get(`/api/v1/users/${userId}/cities/me`)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        name: 'Lyon',
        color: 'green',
        coordinates: { lat: 45.764, lon: 4.8357 },
      }),
    );
  });
});
