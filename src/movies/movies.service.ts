import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { initialMovies } from './seed';

const db: Movie[] = initialMovies;

@Injectable()
export class MoviesService {
  create(createMovieDto: CreateMovieDto) {
    const movie: Movie = {
      id: db.length + 1,
      ...createMovieDto,
    };

    db.push(movie);

    return movie;
  }

  findAll(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    const paginatedItems = db.slice(offset, offset + limit);
  
    const totalItems = db.length;
    const totalPages = Math.ceil(totalItems / limit);
  
    return {
      data: paginatedItems,
      totalItems,
      totalPages,
      currentPage: page,
      limit,
    };
  }
  

  findOne(id: number) {
    return db[id - 1];
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
