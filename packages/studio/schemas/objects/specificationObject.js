export default {
  type: "object",
  name: "specificationObject",
  title: "Характеристика",
  fields: [
    {
      title: "Име",
      name: "spec_name",
      type: "reference",
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
    },
    {
      title: "Стойност",
      name: "spec_value",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "spec_name.spec_name",
      subtitle: "spec_value",
    },
  },
}
