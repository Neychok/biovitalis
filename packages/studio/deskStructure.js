import S from "@sanity/desk-tool/structure-builder"
// prettier-ignore
export default () => 
S.list()
    .title("Меню")
    .id("menu")
    .items([
        S.listItem()
        .title("Продукти")
        .id("products")
        .child(
            // S.list()
            // .title("Раздел")
            // .id("section")
            // .items([
            //     S.listItem()
            //     .title('Сокопроизводство')
            //     .id("juicePressing")
            //     .schemaType('juicePressingCategory')
            //     .child(
                    S.documentList()
                    .title('Категории')
                    .id("juicePressingCategory")
                    .schemaType('juicePressingCategory')
                    .filter('_type == "juicePressingCategory"')
                    .child( id =>
                        S.documentList()
                        .title('Продукти')
                        .id("juicePressingProducts")
                        .filter('_type == "juicePressingProduct" && $id == category._ref')
                        .params({id})
                        .initialValueTemplates([
                            S.initialValueTemplateItem('product-by-category', {id})
                          ])
                        )
            //         )
            // ])           
        ),
        S.listItem()
            .title("Категории")
            .id("categories")
            .child(
                // S.list()
                // .title("Раздел")
                // .id("section")
                // .items([
                //     S.listItem()
                //     .title('Сокопроизводство')
                //     .id("juicePressing")
                //     .child(
                        S.documentTypeList('juicePressingCategory')
                        .title("Редактиране на категории")
                        .id("juicePressingCategory_edit")
                //     )
                // ])
            ),
        S.listItem()
            .title("Характеристики")
            .id("specifications")
            .child(
                S.documentTypeList('specification')
                .title("Редактиране на характеристики")
                .id("specification_edit")
            ),
        S.listItem()
            .title("Страници")
            .id("pages")
            .child(
                S.list()
                .title("Страници")
                .id("pages")
                .items([
                    S.listItem()
                    .id("contactsPage")
                    .title("Контакти")
                    .child(
                        S.document()
                        .schemaType('contactsPage')
                        .documentId('contactsPage')
                        .title("Контакти")
                        .id("contactsPage")
                    )
                ])
            )
    ])
