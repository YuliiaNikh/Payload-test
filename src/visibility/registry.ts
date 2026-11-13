import type { VisibilityCondition } from './types'
import { dateWindowCondition } from './conditions/dateWindow'
import { deviceCondition } from './conditions/device'
import { fieldCondition } from './conditions/field'
import { hasItemsCondition } from './conditions/hasItems'
import { urlParamCondition } from './conditions/urlParam'

// Add a condition here and it appears in every block's Visibility tab (e.g. country, logged-in user, A/B variant)
export const visibilityConditions: VisibilityCondition[] = [
  deviceCondition,
  dateWindowCondition,
  fieldCondition,
  urlParamCondition,
  hasItemsCondition,
]
