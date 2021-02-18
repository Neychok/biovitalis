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

export default {
  type: "document",
  title: "Категория - Сокопроизводство",
  name: "juicePressingCategory",
  fields: [
    //* Име на продукт
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    //* Slug
    {
      type: "slug",
      title: "Slug",
      name: "slug",
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
}
