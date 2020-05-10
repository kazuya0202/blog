module.exports = {
    head: [
        ['link', { rel: 'icon', type: 'image/jpg', href: '/img/favicon.jpg' }],
        ['link', { href: '/css/style.css', rel: 'stylesheet' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION_CONTENT }],
    ],

    plugins: {
        '@vuepress/google-analytics': {
            'ga': process.env.GOOGLE_ANALYTICS_ID
        },
        '@vuepress/pwa': {
            serviceWorker: true
        },
        'vuepress-plugin-container': {
            type: 'warning',
            defaultTitle: 'NOTE',
        },
        'vuepress-plugin-container': {
            type: 'my-details',
            before: info => `<details class="my-details"><summary>${info}</summary><div>`,
            after: '</div></details>',
            defaultTitle: 'DETAILS',
        },
        'one-click-copy': {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
            copyMessage: 'Copied.',
            duration: 1000, // prompt message display time.
            showInMobile: false
        }
    },

    // Title of your website
    title: '一本の矢は折れやすい',

    // Description of your website
    // description: '',

    // Language of your website
    locales: {
        '/': {
            lang: 'ja-JP'
        }
    },

    // Theme to use
    theme: 'meteorlxy',

    // Theme config
    themeConfig: {
        // Language of this theme. See the [Theme Language] section below.
        lang: require('./public/lang/ja-JP'),

        // Personal infomation (delete the fields if you don't have / don't want to display)
        personalInfo: {
            // Nickname
            nickname: 'ichiya',

            // Introduction of yourself (HTML supported)
            description: '自動化への探求',

            // Email
            // email: '',

            // Your location
            location: 'Japan',

            // Your avatar image
            // Set to external link

            // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
            avatar: '/img/favicon.jpg',

            // Accounts of SNS
            sns: {
                github: {
                    account: 'kazuya0202',
                    link: 'https://github.com/kazuya0202'
                }

                // facebook: { account: '', link: '' },
                // twitter: { account: '', link: '' },
                // gitlab: { account: '', link: '' },
            }
        },

        // Header Config (Optional)
        header: {
            // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
            background: {
                // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
                // url: '',

                // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
                useGeo: true
            },

            // show title in the header or not
            showTitle: true
        },

        // Footer Config (Optional)
        footer: {
            // Show 'Powered by VuePress' or not (enable it to support VuePress)
            poweredBy: true

            // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
            // poweredByTheme: false,

            // Add your custom footer (HTML supported)
            // custom:
            //     'Copyright 2019-present <a href="https://github.com/kazuya0202" target="_blank">kazuya0202</a> | MIT License'
        },

        // Info Card Config (Optional)
        infoCard: {
            // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
            headerBackground: {
                // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
                // url: '',

                // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
                useGeo: true
            }
        },

        // Show the last updated time of your posts
        lastUpdated: true,

        // The content of your navbar links
        nav: [
            { text: 'Home', link: '/', exact: true },
            { text: 'Posts', link: '/posts/', exact: false },
            { text: 'GitHub', link: 'https://github.com/kazuya0202/' },
        ],

        // Comments config. See the [Posts Comments] section below.
        comments: {
            platform: 'github',
            owner: 'kazuya0202',
            repo: 'blog',
            clientId: process.env.VSSUE_ID,
            clientSecret: process.env.VSSUE_SECRET,
            autoCreateIssue: false
        },

        // Pagination config (Optional)
        pagination: {
            perPage: 15
        },

        // Default Pages (Optional, the default value of all pages is `true`)
        defaultPages: {
            // Allow theme to add Home page (url: /)
            home: true,
            // Allow theme to add Posts page (url: /posts/)
            posts: true
        }
    }
};
