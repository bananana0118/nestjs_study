import { Expose, Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class HeadersDto {
  @Expose({ name: 'access-token' })
  @IsString()
  @Transform(({ value }) => (Array.isArray(value) ? value[0] : value))
  accessToken: string;
}
