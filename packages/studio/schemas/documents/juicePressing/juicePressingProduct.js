/* Машина Scheme
 * 1. Име на продукт
 * 2. Slug (Скрито)
 * 3. Галерия
 * 4. Описание
 * 5. Youtube URL
 * 6. Характеристики (Повтарящо се)
 * 7. Мета тагове, ключови думи
 * 8. Свързани продукти
 */
import Tabs from "sanity-plugin-tabs"

export default {
  type: "document",
  title: "Продукт - Сокопроизводство",
  name: "juicePressingProduct",
  initialValue: {
    section: "juicePressing",
  },
  fields: [
    //* Име на продукт
    {
      type: "string",
      title: "Име на продукт",
      name: "name",
    },

    //* Категория
    {
      type: "reference",
      title: "Категория",
      name: "category",
      to: [
        {
          type: "juicePressingCategory",
        },
      ],
    },

    //* Секция
    {
      type: "string",
      name: "section",
      hidden: true,
    },

    //* Табове
    {
      type: "object",
      name: "tabs",
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
          type: "text",
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
        },

        //* Youtube link
        {
          type: "url",
          title: "Youtube Линк",
          name: "YoutubeUrl",
          validation: Rule =>
            Rule.uri({
              scheme: ["https"],
            }),
          fieldset: "media",
        },

        //* SEO TAB
        {
          type: "slug",
          title: "Slug",
          name: "slug",
          fieldset: "seo",
          validation: Rule =>
            Rule.required().warning(`Това поле е задължително.`),
          options: {
            source: "name",
            maxLength: 200, // will be ignored if slugify is set
            //isUnique: isUniqueAcrossAllDocuments,
            slugify: input =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
          },
        },
      ],
    },
  ],
}
