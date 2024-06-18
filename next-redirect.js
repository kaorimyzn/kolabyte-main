const shell = require('shelljs');
const path = require('path');

const rootDir = path.join(__dirname, '.');
const contentDir = path.join(rootDir, 'content');
const docsDir = path.join(contentDir, 'docs');
const componentsDocsDir = path.join(docsDir, 'components');

const getComponentsName = () => {
  const names = shell
    .ls('-R', componentsDocsDir)
    .map((file) => path.join(process.cwd(), componentsDocsDir, file))
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => path.basename(file, '.mdx'));
  return names;
};
const getComponentsRoute = (names = []) => {
  return names.map((name) => {
    return {
      source: `/${name}`,
      destination: `/docs/components/${name}`,
      permanent: true
    };
  });
};

async function redirect() {
  const componentsName = getComponentsName();
  return [
    ...getComponentsRoute(componentsName),
    {
      source: '/blog',
      destination: '/docs/blog/artikel/intro.mdx',
      permanent: true
    },
    {
      source: '/docs/blog',
      destination: '/docs/blog/artikel/intro.mdx',
      permanent: true
    },
    {
      source: '/portofolio',
      destination: '/docs/portofolio/seo/intro.mdx',
      permanent: true
    }
  ];
}

module.exports = redirect;
