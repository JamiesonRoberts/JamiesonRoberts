const fs = require('fs')
const globby = require('globby')

function addPage(page) {
    const path = page
        .replace('pages', '')
        .replace('.js', '')
        .replace('.mdx', '')
    const route = path === '/index' ? '' : path

    return `  <url>
    <loc>${`${process.env.NEXT_PUBLIC_VERCEL_URL}${route}`}</loc>
    <changefreq>daily</changefreq>
  </url>`
}

async function generateSitemap() {
    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const pages = await globby([
        'pages/**/*{.js,.mdx}',
        '!pages/_*.js',
        '!pages/api',
        '!pages/404.js',
    ])
    const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

    fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
