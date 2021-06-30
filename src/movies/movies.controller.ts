import { Get, Param, Query, Body, Post, Delete, Patch } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Movie } from './entities/movie.entities';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

	constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
	}

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return 'This will patch a movie with id: ' + movieId;
  }
}