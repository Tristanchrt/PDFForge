import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum } from 'class-validator';
import { RestTroopType } from './RestTroopType';
import { RestCoordinates } from './RestCoordinates';
import { Troop } from '../../domain/Troop';

export class RestTroop {
  @ApiProperty({
    description: 'Unique identifier of the troop',
    example: '123456',
  })
  @IsNotEmpty()
  private readonly id: string;

  @ApiProperty({
    description: 'Coordinates of the troop',
    type: RestCoordinates,
  })
  private readonly coordinates: RestCoordinates;

  @ApiProperty({
    description: 'Type of the troop',
    enum: RestTroopType,
  })
  @IsEnum(RestTroopType)
  private readonly type: RestTroopType;

  constructor(
    id: string,
    coordinates: RestCoordinates,
    type: RestTroopType,
  ) {
    this.id = id;
    this.coordinates = coordinates;
    this.type = type;
  }

  static from(troop: Troop): RestTroop {
    return new RestTroop(
      troop.getId().getValue(),
      RestCoordinates.from(troop.getCoords()),
      RestTroopType[troop.getType()],
    );
  }

  public getId(): string {
    return this.id;
  }

  public getCoordinates(): RestCoordinates {
    return this.coordinates;
  }

  public getType(): RestTroopType {
    return this.type;
  }
}
