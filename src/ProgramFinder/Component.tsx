import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import { ProgramFinderClient } from './Component.client'

export async function ProgramFinder() {
  const data = await getCachedGlobal('programFinder', 1)()

  if (!data?.enabled || !data.options?.length) return null

  return <ProgramFinderClient data={data} />
}
