import { PrismaClient } from "@prisma/client";
import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClientExtended } from "../../utils/custom-prisma-client";

@Injectable()
export class PrismaService
    extends PrismaClientExtended
    implements OnModuleInit, OnModuleDestroy {

    constructor() {
        super({
            log: [
                {
                    emit: "event",
                    level: "warn"
                },
                {
                    emit: "event",
                    level: "error"
                },
            ]
        });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
