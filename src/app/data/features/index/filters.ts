import { AllFilters, Filters } from "../../../models/features/index/filters"


export const trendingFilters: Filters = {
  type: [
    { name: 'all', isApplied: true },
    { name: 'movie', isApplied: false },
    { name: 'tv', isApplied: false },
    { name: 'person', isApplied: false }
  ],
  time: [
    { name: 'day', isApplied: false },
    { name: 'week', isApplied: true },
  ]
}

export const movieFilters: Filters = {
  filter: [
    { name: 'now_playing', isApplied: false },
    { name: 'popular', isApplied: true },
    { name: 'top_rated', isApplied: false },
    { name: 'upcoming', isApplied: false }
  ]
}

export const tvFilters: Filters = {
  filter: [
    { name: 'popular', isApplied: true },
    { name: 'top_rated', isApplied: false },
    { name: 'on_the_air', isApplied: false }
  ]
}

export const searchFilters: Filters = {
  filter: [
    { name: 'multi', isApplied: true },
    { name: 'movie', isApplied: false },
    { name: 'tv', isApplied: false },
    { name: 'person', isApplied: false }
  ]
}

export const allFilters: AllFilters = {
  trending: trendingFilters,
  movie: movieFilters,
  tv: tvFilters,
  search: searchFilters
}
