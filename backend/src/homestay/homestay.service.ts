import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Propiedad, Usuario } from '@prisma/client';
import { HomeStayCreateDTO, HomeStayUpdateDTO } from './dto';

@Injectable()
export class HomestayService {
  constructor(private prisma: PrismaService) {}

  public async getAllHomeStays(): Promise<Propiedad[]> {
    return this.prisma.propiedad.findMany({
      where: { estado: true },
    });
  }

  public async getHomeStayById(id: number): Promise<Propiedad> {
    const homeStay: Propiedad = await this.prisma.propiedad.findUnique({
      where: { id, estado: true },
    });

    if (!homeStay) {
      throw new NotFoundException('No se encontró la propiedad');
    }

    return homeStay;
  }

  public async getHomeStayByUserId(id: number): Promise<Propiedad[]> {
    const ownerExists: Usuario = await this.prisma.usuario.findUnique({
      where: { id: id },
    });

    if (!ownerExists) {
      throw new NotFoundException('El propietario no existe');
    }

    return this.prisma.propiedad.findMany({
      where: { estado: true, anfitrionId: id },
    });
  }

  public async createHomeStay(data: HomeStayCreateDTO): Promise<Propiedad> {
    const ownerExists: Usuario = await this.prisma.usuario.findUnique({
      where: { id: data.anfitrionId },
    });

    if (!ownerExists) {
      throw new NotFoundException('El propietario no existe');
    }

    try {
      const newHomeStay: Propiedad = await this.prisma.propiedad.create({
        data,
      });
      return newHomeStay;
    } catch (error) {
      if (error.code == 'P2002') {
        throw new ForbiddenException('La ubicacion de la propiedad ya existe');
      }
      throw new InternalServerErrorException(error);
    }
  }

  public async updateHomeStay(
    id: number,
    data: HomeStayUpdateDTO,
  ): Promise<Propiedad> {
    const homeStay: Propiedad = await this.prisma.propiedad.findUnique({
      where: { id, estado: true },
    });

    if (!homeStay) {
      throw new NotFoundException('No se encontro la propiedad');
    }

    try {
      const updatedHomeStay: Propiedad = await this.prisma.propiedad.update({
        where: { id },
        data,
      });
      return updatedHomeStay;
    } catch (error) {
      if (error.code == 'P2003') {
        throw new NotFoundException('El propietario no existe');
      }
    }
  }

  public async deleteHomeStay(id: number) {
    const homeStay: Propiedad = await this.prisma.propiedad.findUnique({
      where: { id, estado: true },
    });

    if (!homeStay) {
      throw new NotFoundException('No se encontro la propiedad');
    }

    return this.prisma.propiedad.update({
      where: { id },
      data: { estado: false },
    });
  }
}
