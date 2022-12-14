import { Module } from '@nestjs/common';
import { HhService } from './hh.service';
import { TopPageModule } from "../top-page/top-page.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  providers: [HhService],
  imports: [ConfigModule, HttpModule],
  exports: [HhService]
})
export class HhModule {}
