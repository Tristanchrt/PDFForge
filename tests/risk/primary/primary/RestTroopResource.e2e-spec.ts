import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../../../src/app.module';
import * as request from 'supertest';

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

  it('should move troop to a new location', async () => {
    // Given: a user with id 2 and a troop
    const userId = 2;
    const troopPayload = {
      type: 'SOLDIER',
      coordinates: { lat: 1, lon: 2 },
    };

    const createResponse = await request(app.getHttpServer())
      .post(`/api/v1/users/${userId}/troops`)
      .send(troopPayload)
      .expect(201);

    const troopId = createResponse.body.id;

    // When: I move the troop to a new location
    const moveResponse = await request(app.getHttpServer())
      .put(`/api/v1/users/${userId}/troops/${troopId}/move`)
      .send({ lat: 3, lon: 4 })
      .expect(200);

    expect(moveResponse.body).toEqual({
      id: troopId,
      coordinates: { lat: 3, lon: 4 },
      type: 'SOLDIER',
    });

    // TODO add socket handling
  });
});
