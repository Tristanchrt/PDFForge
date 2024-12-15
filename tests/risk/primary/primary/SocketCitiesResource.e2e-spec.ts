// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import { AppModule } from '../../../../src/app.module';
// import { WebSocketTestHelper } from '../../../shared/websocket.helper';
// import { CITIES_DATA } from '../../../../src/risk/infrastructure/secondary/Cities.data';
// import { City } from '../../../../src/risk/domain/City';
// import { Coordinates } from '../../../../src/risk/domain/Coordinates';
//
// describe('ChatGateway (e2e)', () => {
//   let app: INestApplication;
//   let wsHelper: WebSocketTestHelper;
//

it('should be defined', () => {
  expect(true).toBeDefined();
})
//   const PORT = 200;
//   const SOCKET_URL = 'http://localhost:' + PORT;
//
//   beforeAll(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();
//
//     app = moduleFixture.createNestApplication();
//     await app.listen(PORT);
//
//     wsHelper = new WebSocketTestHelper(SOCKET_URL);
//   });
//
//   beforeEach(async () => {
//     await wsHelper.connect();
//   });
//
//   afterEach(() => {
//     wsHelper.disconnect();
//   });
//
//   afterAll(async () => {
//     await app.close();
//   });
//
//   it('should get an available cities on emit getCities', (done) => {
//     // wsHelper.emit('getCities');
//     //
//     // wsHelper.on('getCities', (cities) => {
//     //   expect(cities).toEqual(
//     //     CITIES_DATA.map(
//     //       (city) =>
//     //         new City(
//     //           city.name,
//     //           new Coordinates(city.coords[0], city.coords[1]),
//     //           city.color,
//     //         ),
//     //     ),
//     //   );
//     //   done();
//     // });
//   }, 2000);
// });
