import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class HomeStayUpdateDTO {
  @IsOptional()
  @IsNumber()
  dormitorios: number;

  @IsOptional()
  @IsNumber()
  camas: number;

  @IsOptional()
  @IsNumber()
  banos: number;

  @IsOptional()
  @IsArray()
  @Type(() => Date)
  fechasDisponibles: Date[];

  @IsOptional()
  @IsNumber()
  precioNoche: number;

  @IsOptional()
  @IsString()
  tipo: string;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsString()
  calle: string;

  @IsOptional()
  @IsNumber()
  nroCasa: number;

  @IsOptional()
  @IsNumber()
  nroDpto: number;

  @IsOptional()
  @IsArray()
  @Type(() => String)
  comodidades: string[];

  @IsOptional()
  @IsArray()
  @Type(() => String)
  opciones_de_seguridad: string[];

  @IsOptional()
  @IsArray()
  @Type(() => String)
  opciones_de_llegada: string[];

  @IsOptional()
  @IsArray()
  @Type(() => String)
  reglas: string[];

  @IsOptional()
  @IsNumber()
  anfitrionId: number;

  @IsOptional()
  @IsString()
  pais: string;

  @IsOptional()
  @IsString()
  ciudad: string;
}
