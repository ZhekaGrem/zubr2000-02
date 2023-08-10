
const offer ={
    name: 'offer',
    title: 'Пропозиції',
    type: 'document',
    fields: [
      {
        name: 'meta_title_offer',
        title: 'Заголовок',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'body_text_offer',
        title: 'Текст публікації',
        type: 'string',
        validation: Rule => Rule.required(),

      },
      {
        name: 'publication_data_offer',
        title: 'Дата публікації',
        type: 'date',
        validation: Rule => Rule.required(),

      },
    ]
  }

  export default offer