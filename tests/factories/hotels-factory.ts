import { prisma } from "@/config";
import faker from "@faker-js/faker";

 export async function createHotel() {
    return prisma.hotel.create({
        data: {
            name: faker.name.findName(),
            image: faker.image.imageUrl(),
            createdAt: faker.datatype.datetime(),
            updatedAt: faker.datatype.datetime()
        },
    });
 }