import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import omukorimaGrammar from './src/grammars/omukorima.tmLanguage.json' with { type: 'json' };

const repository = 'website';
const base = process.env.NODE_ENV === 'development' ? '/' : `/${repository}`;

export default defineConfig({
  site: 'https://omukorima.github.io',
  base,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  integrations: [
    starlight({
      title: 'Omukorima',
      description: 'The documentation for the Omukorima programming language.',
      locales: {
        root: { label: '日本語', lang: 'ja' },
        en: { label: 'English', lang: 'en' },
      },
      customCss: ['./src/styles/custom.css', 'katex/dist/katex.min.css'],
      expressiveCode: {
        themes: ['github-light', 'github-dark'],
        shiki: { langs: [omukorimaGrammar] },
        styleOverrides: { borderRadius: '0' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/omukorima',
        },
      ],
      sidebar: [
        { label: 'Language Overview', slug: 'overview' },
        { label: 'Tutorial', slug: 'tutorial' },
        { label: 'Language Specification', slug: 'specification' },
        { label: 'Language Design Documents', slug: 'language-design' },
        { label: 'Compiler / Runtime Design', slug: 'compiler-runtime' },
        { label: 'Disclaimer', slug: 'disclaimer' },
      ],
    }),
  ],
});
