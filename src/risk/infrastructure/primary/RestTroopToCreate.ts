import { TroopToCreate } from '../../domain/TroopToCreate';
import { RestCoordinates } from './RestCoordinates';
import {
  RestTroopType,
  toDomainTroopType,
} from './RestTroopType';
import { UserId } from '../../domain/UserId';
import { IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class RestTroopToCreate {
  @ValidateNested()
  @Type(() => RestCoordinates)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Coordinates of the troop',
    required: true,
    type: RestCoordinates,
  })
  private readonly coordinates: RestCoordinates;

  @IsNotEmpty()
  @IsEnum(RestTroopType)
  @ApiProperty({
    description: 'Type of the troop',
    required: true,
    enum: RestTroopType,
  })
  private readonly type: RestTroopType;

  constructor(coordinates: RestCoordinates, type: RestTroopType) {
    this.coordinates = coordinates;
    this.type = type;
  }

  public toDomain(user: UserId): TroopToCreate {
    return new TroopToCreate(
      this.coordinates.toDomain(),
      toDomainTroopType(this.type),
      user,
    );
  }
}
