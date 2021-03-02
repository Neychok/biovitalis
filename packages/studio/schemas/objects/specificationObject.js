export default {
  type: "object",
  name: "specificationObject",
  title: "Характеристика",
  fields: [
    {
      type: "reference",
      title: "Име",
      name: "spec_name",
      to: [{ type: "specification" }],
      options: {
        filter: ({ document }) => {
          if (!document.section) {
            return {
              filter: "section == 'all'",
            }
          }

          return {
            filter: "section == $section || section == 'all'",
            params: { section: document.section },
          }
        },
      },
      validation: Rule => Rule.required().error("Избери име на характеристика"),
    },
    {
      title: "Стойност",
      name: "spec_value",
      type: "string",
      validation: Rule => Rule.required().warning("Липсва стойност"),
    },
  ],
  preview: {
    select: {
      title: "spec_name.spec_name",
      subtitle: "spec_value",
    },
  },
}
