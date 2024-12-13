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

  toDomain(user: UserId): TroopToCreate {
    return new TroopToCreate(
      this.coordinates.toDomain(),
      toDomainTroopType(this.type),
      user,
    );
  }

  @ApiProperty({
    description: 'X and Y coordinates',
    required: true,
    type: () => RestCoordinates,
  })
  public getCoordinates(): RestCoordinates {
    return this.coordinates;
  }

  @ApiProperty({
    description: 'The type of troop',
    enum: RestTroopType,
    required: true,
  })
  public getType(): RestTroopType {
    return this.type;
  }
}
