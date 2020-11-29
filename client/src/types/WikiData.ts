import { Category } from "./Category";
import { Section } from "./Section";

export type WikiData = {
  categories: Category[]
  sections: Section[]
  title: string
}

export type FetchWikiData = {
  fetchWikiData: WikiData | null
}

export type WikiDataResponse = {
  data: FetchWikiData | undefined
  loading: boolean | undefined
}
