import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../../src/app.module';
import * as request from 'supertest';
import { IS_UUID } from 'class-validator';

describe('Rest Troop resource', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should create and retrieve a troop for a user', async () => {
    // Given: a user with id 1
    const userId = 1;
    const troopPayload = {
      type: 'SOLDIER',
      coordinates: { lat: 1, lon: 2 },
    };

    // When: I create a troop for this user
    const createResponse = await request(app.getHttpServer())
      .post(`/api/v1/users/${userId}/troops`)
      .send(troopPayload)
      .expect(201);

    expect(createResponse.body).toEqual(
      expect.objectContaining(
        troopPayload,
      ),
    );

    // Then: the troop is retrievable
    const getResponse = await request(app.getHttpServer())
      .get(`/api/v1/users/${userId}/troops`)
      .expect(200);

    expect(getResponse.body).toEqual(
      expect.arrayContaining([expect.objectContaining(troopPayload)]),
    );
  });
});
