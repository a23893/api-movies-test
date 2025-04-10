// src/movies/dto/list-query.dto.ts
import { Type } from 'class-transformer';
import { IsInt, Min, Max } from 'class-validator';

export class ListQueryDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit: number = 10;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;
}
