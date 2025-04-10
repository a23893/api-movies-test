import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
  Max,
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(10)
  synopsis: string;

  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  year: number;

  @IsOptional()
  @Min(0)
  @Max(10)
  rating?: number;
}
