const { withSentryConfig } = require('@sentry/nextjs')

const withPlugins = require('next-compose-plugins')

const { withPlausibleProxy } = require('next-plausible')

const nextConfig = {
    swcMinify: true,
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-CA'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en-CA'
    }
}

const moduleExports = withPlugins([
    withPlausibleProxy({
        subdirectory: 'analytics'
    })
], nextConfig)

const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore

    silent: true // Suppresses all logs
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)
