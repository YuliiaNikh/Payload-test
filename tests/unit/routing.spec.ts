// @vitest-environment node
import { describe, expect, it } from 'vitest'

import { routeRequest } from '@/i18n/routing'

describe('routeRequest', () => {
  it('rewrites unprefixed paths to the default locale', () => {
    expect(routeRequest('/')).toEqual({ kind: 'rewrite', pathname: '/en' })
    expect(routeRequest('/about/team')).toEqual({ kind: 'rewrite', pathname: '/en/about/team' })
  })

  it('redirects an explicit default-locale prefix to the unprefixed URL', () => {
    expect(routeRequest('/en')).toEqual({ kind: 'redirect', pathname: '/' })
    expect(routeRequest('/en/about')).toEqual({ kind: 'redirect', pathname: '/about' })
  })

  it('passes other locale prefixes through', () => {
    expect(routeRequest('/he')).toEqual({ kind: 'next' })
    expect(routeRequest('/he/about')).toEqual({ kind: 'next' })
  })

  it('leaves Payload and framework routes alone', () => {
    expect(routeRequest('/admin')).toEqual({ kind: 'next' })
    expect(routeRequest('/admin/collections/pages')).toEqual({ kind: 'next' })
    expect(routeRequest('/api/pages')).toEqual({ kind: 'next' })
    expect(routeRequest('/next/preview')).toEqual({ kind: 'next' })
  })

  it('does not confuse pages whose slug starts like a reserved route', () => {
    expect(routeRequest('/administration')).toEqual({ kind: 'rewrite', pathname: '/en/administration' })
    expect(routeRequest('/apis')).toEqual({ kind: 'rewrite', pathname: '/en/apis' })
  })
})
