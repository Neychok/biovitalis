import LeafletGeopointInput from "sanity-plugin-leaflet-input"
export default {
  type: "document",
  title: "Контакти",
  name: "contactsPage",
  fields: [
    {
      type: "string",
      title: "Адрес",
      name: "address",
    },
    {
      title: "Линк към Google Maps",
      name: "locationURL",
      type: "url",
    },
    {
      title: "Локация",
      name: "location",
      type: "geopoint",
      options: {
        leaflet: {
          defaultLocation: {
            lat: 42.82008,
            lng: 23.2291849,
          },
          defaultZoom: 13,
        },
      },
      inputComponent: LeafletGeopointInput,
    },
    {
      type: "string",
      title: "Телефон 1",
      name: "phone_1",
    },
    {
      type: "string",
      title: "Телефон 2",
      name: "phone_2",
    },
    {
      type: "string",
      title: "Имейл",
      name: "email",
    },
  ],
}
