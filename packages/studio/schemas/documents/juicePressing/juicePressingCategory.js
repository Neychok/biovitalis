export default {
  type: "document",
  title: "Категория - Сокопроизводство",
  name: "juicePressingCategory",
  fields: [
    //* Име на продукт
    {
      type: "string",
      title: "Име на категория",
      name: "name",
      validation: Rule => Rule.required().error("Това поле е задължително."),
    },

    //* Slug
    {
      type: "slug",
      title: "Slug",
      name: "slug",
      validation: Rule => Rule.required().error("Това поле е задължително."),
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
        //isUnique: isUniqueAcrossAllDocuments,
        slugify: input =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      type: "reference",
      title: "Секция",
      name: "section",
      to: [
        {
          type: "section",
        },
      ],
      validation: Rule => Rule.required().error(`Това поле е задължително.`),
    },
    {
      title: "Приоритет",
      name: "order",
      type: "number",
    },
    // {
    //   type: "array",
    //   title: "Предварително зададени характеристики",
    //   name: "initialSpecifications",
    //   of: [{ type: "specificationObject" }],
    //   options: {
    //     editModal: "modal",
    //   },
    //   validation: Rule => Rule.unique().warning("Повтарят се характеристики"),
    // },
  ],
}
