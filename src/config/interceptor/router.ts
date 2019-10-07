export function routerBeforeEachFunc(to: any, from: any, next: any) {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
}

export function routerAfterEachFunc(to: any, from: any) {
  console.log('to: ', to)
}
