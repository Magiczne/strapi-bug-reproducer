import type { Schema, Struct } from '@strapi/strapi';

export interface SeoSeoPageData extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_page_data';
  info: {
    description: '';
    displayName: 'SEO Page Data';
    icon: 'globe';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 256;
      }>;
    follow: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    index: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    tags: Schema.Attribute.Component<'seo.seo-tag', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 128;
      }>;
  };
}

export interface SeoSeoTag extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_tags';
  info: {
    displayName: 'SEO Tag';
    icon: 'priceTag';
  };
  attributes: {
    tag: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 32;
      }>;
  };
}

export interface WidgetsRelatedAdvices extends Struct.ComponentSchema {
  collectionName: 'components_widgets_related_advices';
  info: {
    description: '';
    displayName: 'Recommended Advices';
  };
  attributes: {
    items: Schema.Attribute.Relation<'oneToMany', 'api::advice.advice'>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 128;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 128;
      }>;
  };
}

export interface WidgetsText extends Struct.ComponentSchema {
  collectionName: 'components_widgets_texts';
  info: {
    displayName: 'Text';
    icon: 'book';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.seo-page-data': SeoSeoPageData;
      'seo.seo-tag': SeoSeoTag;
      'widgets.related-advices': WidgetsRelatedAdvices;
      'widgets.text': WidgetsText;
    }
  }
}
