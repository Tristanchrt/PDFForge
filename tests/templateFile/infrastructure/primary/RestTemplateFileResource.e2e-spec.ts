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

    expect(response.text).toEqual('Hello World!');
  });

  it('should generate a pdf file from template', async () => {
    const body = {
      template: '<html><body><h1>Mon Rapport {{title}}</h1></body></html>',
      variables: {
        title: 'Rapport 2024',
        name: 'Jean Dupont',
      },
      options: {
        format: 'A4',
        margin: {
          top: '10mm',
          bottom: '10mm',
          left: '10mm',
          right: '10mm',
        },
      },
    };
    const response = await request(app.getHttpServer())
      .post(`/api/v1/generate-pdf`)
      .send(body)
      .expect(201)
      .expect('Content-Type', 'application/pdf')
      .expect('Content-Disposition', 'attachment; filename=report.pdf');

    expect(response.body).toBeDefined();
  });
});
