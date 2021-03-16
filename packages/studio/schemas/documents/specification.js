export default {
  type: "document",
  title: "Характеристика - Сокопроизводство",
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
      type: "string",
      title: "Раздел",
      name: "section",
      options: {
        list: [
          { title: "Всички", value: "all" },
          { title: "Сокопроизводство", value: "juicePressing" },
        ],
        layout: "radio", // <-- defaults to 'dropdown'
      },
      validation: Rule => Rule.required().warning(`Това поле е задължително.`),
    },
  ],
}
