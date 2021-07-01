import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

// npm i @nestjs/mapped-types
export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}