import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsObject, IsOptional } from 'class-validator';
import { RestPdfOptions } from './RestPdfOptions';

export class RestPdfToGenerate {
  @ApiProperty({
    description: 'Template HTML utilisé pour générer le PDF',
    example: '<html><body><h1>Mon Rapport {{title}}</h1></body></html>',
    required: true,
  })
  @IsString()
  template: string;

  @ApiProperty({
    description: 'Variables de remplissage pour le template',
    example: { title: 'Rapport 2024', name: 'Jean Dupont' },
    required: false,
  })
  @IsObject()
  variables: Record<string, any>;

  @ApiProperty({
    description: 'Options spécifiques pour la génération du PDF',
    example: {
      format: 'A4',
      margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    },
    required: false,
  })
  @IsOptional()
  @IsObject()
  options?: RestPdfOptions;
}
