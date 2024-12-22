export interface Dictionary {
  navigation: {
    home: string
    about: string
  }
  page: {
    home: {
      title: string
      description: string
      subtitle: string
      features: {
        title: string
        description: string
      }[]
    }
    about: {
      title: string
      description: string
    }
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  footer: {
    // ...your footer types
  }
}
