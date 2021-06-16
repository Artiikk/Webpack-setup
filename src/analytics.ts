interface IAnalytics {
  destroy: () => void;
  getClicks: () => void;
}

function createAnalytics(): IAnalytics {
  const counter: number = 0
  let isDestroyed: boolean = false

  const makeIncrement = (): number => counter + 1

  document.addEventListener('click', makeIncrement)

  return {
    destroy() {
      document.removeEventListener('click', makeIncrement)
      isDestroyed = true
    },
    getClicks() {
      if (isDestroyed) return 'Analytics is destroyed'
      return counter
    }
  }
}

window['analytics'] = createAnalytics()