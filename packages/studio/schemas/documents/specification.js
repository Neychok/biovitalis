export default {
  type: "document",
  title: "Характеристика",
  name: "specification",
  initialValue: {
    section: "all",
  },
  fields: [
    {
      type: "string",
      title: "Име",
      name: "spec_name",
      validation: Rule => Rule.required().warning(`Това поле е задължително.`),
    },
    {
      title: "Покажи на всички секции",
      name: "show_all",
      type: "boolean",
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
    },
  ],
}
