import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  name: string;

  @IsString()
  @Length(2, 10, { groups: ['create'] }) //global은 그룹은 안먹고 가장 첫번째만 적용된다..
  @Length(1, 15, { groups: ['update'] })
  description: string;

  @IsInt()
  @IsPositive()
  price: number;
}
