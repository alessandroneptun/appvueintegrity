import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { IconContainer } from './icon-container/icon-container.component'
import { Check } from './check/check.component'
import { News } from './news/news.component'
import { Line } from './line/line.component'

@NgModule({
  declarations: [IconContainer, Check, News, Line],
  imports: [CommonModule, RouterModule],
  exports: [IconContainer, Check, News, Line],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
