import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';
import { WebSocketTestHelper } from './websocket.helper';

describe('ChatGateway (e2e)', () => {
  let app: INestApplication;
  let wsHelper: WebSocketTestHelper;

  const SOCKET_URL = 'http://localhost:3000';

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.listen(3000);

    wsHelper = new WebSocketTestHelper(SOCKET_URL);
  });

  beforeEach(async () => {
    await wsHelper.connect();
  });

  afterEach(() => {
    wsHelper.disconnect();
  });

  afterAll(async () => {
    await app.close();
  });

  const MY_CITY = {
    name: 'Lyon',
    coords: [45.764, 4.8357],
    color: 'green',
  };

  it('should get an available city on connection', (done) => {
    wsHelper.on('myCity', (cities) => {
      expect(cities).toEqual(MY_CITY);
      done();
    });
  });

  it('should handle "message" events', (done) => {
    const testMessage = { text: 'Hello, World!' };

    wsHelper.emit('message', testMessage);

    wsHelper.on('privateChatMessage', (response) => {
      expect(response).toEqual(testMessage);
      done();
    });
  });
});
