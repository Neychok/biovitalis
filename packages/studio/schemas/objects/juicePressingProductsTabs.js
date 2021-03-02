import Tabs from "sanity-plugin-tabs"
export default {
  type: "object",
  name: "juicePressingProductsTabs",
  inputComponent: Tabs,

  fieldsets: [
    { name: "main", title: "Main", options: { sortOrder: 10 } },
    { name: "media", title: "Медия", options: { sortOrder: 20 } },
    { name: "seo", title: "SEO", options: { sortOrder: 30 } },
  ],

  options: {
    layout: "object",
  },

  fields: [
    //* MAIN TAB
    {
      type: "portableText",
      title: "Описание",
      name: "description",
      fieldset: "main",
    },

    {
      type: "array",
      title: "Характеристики",
      name: "specifications",
      fieldset: "main",
      of: [{ type: "specificationObject" }],
      options: {
        editModal: "popover",
      },
    },

    //* MEDIA TAB

    //* Снимки
    {
      type: "array",
      title: "Галерия",
      name: "gallery",
      fieldset: "media",
      of: [{ type: "imageObject" }],
      options: {
        layout: "grid",
      },
      validation: Rule => Rule.unique(),
    },

    //* Youtube link
    {
      type: "url",
      title: "Youtube Линк",
      name: "YoutubeUrl",
      fieldset: "media",
      validation: Rule =>
        Rule.uri({
          scheme: ["https"],
        }),
    },

    //* SEO TAB
    //* SLUG
    {
      type: "slug",
      title: "Slug",
      name: "slug",
      fieldset: "seo",
      validation: Rule => Rule.required().warning(`Това поле е задължително.`),
      options: {
        source: "name",
        maxLength: 200,
        slugify: input =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },

    //* Тагове
    {
      type: "tags",
      title: "Тагове",
      name: "tags",
      fieldset: "seo",
    },
    //* Свързани продукти
    {
      type: "array",
      title: "Свързани продукти",
      name: "relatedProducts",
      fieldset: "seo",
      of: [{ type: "relatedProductObject" }],
      options: {
        layout: "grid",
      },
    },
  ],
}
