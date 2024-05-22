import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsPositive()
    @Min(1)
    @IsInt()
    pokedexNo: number;

    @IsString()
    @MinLength(1)
    name: string;
}
