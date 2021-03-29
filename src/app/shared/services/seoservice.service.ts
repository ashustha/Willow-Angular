import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PageMetadata } from 'src/app/_types/seo';

const defaultMetaData: PageMetadata = {
  type: 'website',
  description: 'Imaginary',
  title: 'Imaginary',
  keywords: 'Food',
};

const titlePrefix = 'Imaginary | ';

@Injectable({
  providedIn: 'root',
})
export class SEOServiceService {
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  updateMetaData(pageMetaData: PageMetadata, index = true) {
    const metaData = { ...defaultMetaData, ...pageMetaData };
    this.setTitle(metaData.title);
    this.meta.updateTag({ name: 'description', content: metaData.description });
    this.meta.updateTag({
      name: 'keywords',
      content: metaData.keywords ? metaData.keywords : metaData.title,
    });

    this.meta.updateTag({
      name: 'robots',
      content: index ? 'index, follow' : 'noindex',
    });

    this.addMetadataForOpenGraph(metaData);
  }

  setTitle(title: string) {
    this.title.setTitle(titlePrefix + title);
  }

  private addMetadataForOpenGraph(data: PageMetadata) {
    this.meta.updateTag({ property: 'og:type', content: data.type });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({
      property: 'og:description',
      content: data.description,
    });
    this.meta.updateTag({ property: 'og:url', content: this.router.url });
    if (data.imageUrl) {
      this.meta.updateTag({ property: 'og:image', content: data.imageUrl });
      this.meta.updateTag({ property: 'og:image:width', content: 'auto' });
      this.meta.updateTag({ property: 'og:image:height', content: '300' });
    }
  }
}
