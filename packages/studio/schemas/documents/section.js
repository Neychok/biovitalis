export default {
  type: "document",
  title: "Секция",
  name: "section",
  fields: [
    {
      type: "string",
      title: "Име на секция",
      name: "section_name",
      validation: Rule => Rule.required().warning(`Това поле е задължително.`),
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
          input.charAt(0).toUpperCase() +
          input.slice(1).toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      type: "imageObject",
      title: " ",
      name: "image",
    },
    {
      name: "order",
      title: "Подреждане",
      type: "number",
      hidden: true,
    },
  ],
  preview: {
    select: {
      media: "image.image",
      title: "section_name",
    },
  },
}
