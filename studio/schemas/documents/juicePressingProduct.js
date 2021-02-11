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

// Checks Slug uniqueness accross all documents
//import { isUniqueAcrossAllDocuments } from "../lib/isUniqueAcrossAllDocuments";
import Tabs from "sanity-plugin-tabs"

export default {
  type: "document",
  title: "Продукт - Сокопроизводство",
  name: "juicePressingProduct",
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

    //* Табове
    {
      name: "tabs",
      type: "object",
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
          title: "Описание",
          name: "description",
          type: "text",
          fieldset: "main",
        },

        {
          title: "Характеристики",
          name: "specifications",
          type: "array",
          fieldset: "main",
          of: [{ type: "specification" }, { type }],
        },

        //* MEDIA TAB
        {
          title: "Youtube Линк",
          name: "YoutubeUrl",
          type: "url",
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
          validation: Rule => Rule.required(),
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
