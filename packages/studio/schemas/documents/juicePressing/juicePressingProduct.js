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

export default {
  type: "document",
  title: "Продукт",
  name: "juicePressingProduct",
  fields: [
    //* Име на продукт
    {
      type: "string",
      title: "Име на продукт",
      name: "name",
      validation: Rule => Rule.required().error(`Това поле е задължително.`),
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
      validation: Rule => Rule.required().error(`Това поле е задължително.`),
    },
    {
      title: "Приоритет",
      name: "order",
      type: "number",
    },
    //* Табове
    {
      type: "juicePressingProductsTabs",
      name: "tabs",
    },
  ],
  preview: {
    select: {
      media: "tabs.gallery[0].image",
      title: "name",
    },
  },
}
