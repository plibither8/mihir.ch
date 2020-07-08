import { metatags, url as getUrl } from '@sveltech/routify'
import { get_store_value as getStoreValue } from 'svelte/internal'

const defaults = {
  url: 'https://mihir.ch',
  title: 'Mihir Chaturvedi · plibither8',
  description: 'Mihir Chaturvedi is primarily a UX developer, big - time JavaScripter, small - time designer and a full - time student at IIIT Delhi'
}

export function setMetaTags(title, description) {
  const path = getStoreValue(getUrl)()

  let url = path !== '/index' ? `https://mihir.ch${path}` : defaults.url
  title = title ? `${title} · Mihir Chaturvedi` : defaults.title
  description = description || defaults.description

  metatags.title = title
  metatags['twitter:title'] = title

  metatags.description = description
  metatags['twitter:description'] = description

  metatags['og:url'] = url
  metatags['twitter:url'] = url
}
