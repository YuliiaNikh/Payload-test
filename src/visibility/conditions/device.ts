import type { VisibilityCondition } from '../types'

const devices = ['desktop', 'tablet', 'mobile'] as const

export const deviceCondition: VisibilityCondition = {
  slug: 'device',
  label: 'Device',
  fields: [
    {
      name: 'device_show',
      label: 'Show on',
      type: 'select',
      hasMany: true,
      defaultValue: [...devices],
      options: devices.map((value) => ({ label: value, value })),
    },
  ],
  classes: (row) => {
    const show = (row.device_show as string[] | undefined) ?? [...devices]
    return devices.filter((d) => !show.includes(d)).map((d) => `hide-on-${d}`)
  },
}
