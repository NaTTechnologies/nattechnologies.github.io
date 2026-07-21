/**
 * Construye una URL compatible con desarrollo, producción y GitHub Pages.
 * Los archivos deben existir dentro de /public.
 */
export function assetUrl(path) {
  const normalizedPath = String(path ?? '').replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${normalizedPath}`
}
