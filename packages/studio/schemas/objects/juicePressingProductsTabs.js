import Tabs from "sanity-plugin-tabs"
export default {
  type: "object",
  title: "Табове",
  name: "juicePressingProductsTabs",
  inputComponent: Tabs,

  fieldsets: [
    { name: "main", title: "Информация", options: { sortOrder: 10 } },
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
      validation: Rule => Rule.required().warning("Липсва описание"),
    },

    {
      type: "array",
      title: "Характеристики",
      name: "specifications",
      fieldset: "main",
      of: [{ type: "specificationObject" }],
      options: {
        editModal: "modal",
      },
      validation: Rule => Rule.unique().warning("Повтарят се характеристики"),
    },
    //* Свързани продукти
    {
      type: "array",
      title: "Свързани продукти",
      name: "relatedProducts",
      fieldset: "main",
      of: [{ type: "relatedProductObject" }],
      options: {
        layout: "grid",
      },
      validation: Rule => Rule.unique().error("Този продукт е вече избран"),
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
      validation: Rule => Rule.unique().warning("Има повтарящи се изображения"),
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
      validation: Rule => Rule.required().error(`Това поле е задължително.`),
      options: {
        source: "name",
        maxLength: 200,
        slugify: input =>
          input.charAt(0).toUpperCase() +
          input.slice(1).toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },

    //* Мета описание
    {
      type: "string",
      title: "Мета описание",
      name: "metaDescription",
      fieldset: "seo",
      validation: Rule =>
        Rule.max(160).warning(
          `Мета описанието не бива да е повече от 160 знака.`
        ),
    },

    //* Тагове
    {
      type: "tags",
      title: "Тагове",
      name: "tags",
      fieldset: "seo",
      validation: Rule => Rule.unique().error("Премахни повтарящите се тагове"),
    },
  ],
}
