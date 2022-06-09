export type Supportedi18n = "fr" | "en"

export type LanguageList = {
  [lang in Supportedi18n as string] :string
}
