import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  singletons: {
    homePage: singleton({
      label: 'Home Page',
      path: 'src/content/pages/home',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title', defaultValue: 'Brotherhood' }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        heroImage: fields.image({ label: 'Hero Background', directory: 'public/images', publicPath: '/images/' }),
        // ADDED: Carousel Image Array
        carouselImages: fields.array(
          fields.image({ label: 'Image', directory: 'public/images/carousel', publicPath: '/images/carousel/' }),
          { label: 'Carousel Images', itemLabel: props => 'Slide' }
        ),
      },
    }),
    applyPage: singleton({
      label: 'Application Info',
      path: 'src/content/pages/apply',
      schema: {
        formUrl: fields.url({ label: 'Google Form or Typeform URL' }),
      }
    })
  },
  collections: {
    faqs: collection({
      label: 'FAQs',
      slugField: 'question',
      path: 'src/content/faqs/*',
      schema: {
        question: fields.text({ label: 'Question' }),
        answer: fields.text({ label: 'Answer', multiline: true }),
      },
    }),
    socialGallery: collection({
      label: 'Instagram / Social Photos',
      slugField: 'title',
      path: 'src/content/gallery/*',
      schema: {
        title: fields.text({ label: 'Photo Title (Internal)' }),
        image: fields.image({ label: 'Photo', directory: 'public/images/gallery', publicPath: '/images/gallery/' }),
        link: fields.url({ label: 'Link to actual Instagram Post (Optional)' }),
      }
    })
  },
});