import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

export const RequestHeader = createParamDecorator(
  (targetDto: any, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;
    const dto = plainToInstance(targetDto, headers, {
      excludeExtraneousValues: true,
    });

    return dto;
  },
);
