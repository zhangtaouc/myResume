export const getImage = (url: string) => new URL(url, import.meta.url).href
export const goExtraPage = (url: string) => {
  window.location.href = url
}
