module.exports = {
    head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'icon', href: `/logo.png` }]
    ],
    theme: 'reco',
    base: '/blog/',
    title: 'Cho\'s blog',
    permalink: '/:year/:month/:day/:slug',
    logo: '/assets/img/lamp.png',
    description: 'I am a Computer Science student. Here is my thoughts on my studying.',
    themeConfig: {
        type:'blog',
        logo: '/logo.png',
        noFoundPageByTencent: false,
        authorAvatar: '/profile.JPG',
        // Blog configuration
        blogConfig: {
            category: {
                location: 2,     // The position occupied in the navigation bar menu, default to 2
                text: 'Category' // Text default to "Category"
            },
            tag: {
                location: 3,     // The position occupied in the navigation bar menu, default to 3
                text: 'Tag'      // Text default to "Tag"
            },
            socialLinks: [     // Information bar displays social information
                { icon: 'reco-github', link: 'https://github.com/chowsychoch' },
                { icon: 'reco-linkedin', link: 'https://www.linkedin.com/in/chowsy-cho/' }
            ]
        },
        nav: [
            { text: 'Home', link: '/' ,icon: 'reco-home'},
            {
                text: 'Category',
                items: [
                    { text: 'LeetCode', link: '/categories/LeetCode/' },
                    { text: 'Personal Notes', link: '/categories/Note/' },
                    { text: 'Other', link: '/categories/Other/' }
                ]
            },
            {
                text: 'Contacts',
                items: [
                    { text: 'Github', link: 'https://github.com/chowsychoch' },
                    { text: 'Linkedin', link: 'https://www.linkedin.com/in/chowsy-cho/' },
                    { text: 'Email', link: 'mailto:chomancho2021@gmail.com' }
                ]
            },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: 'About', link: '/about.html' }

        ],
        lastUpdated: 'Last Updated',
        author: 'Chowsy Cho'
    }
}

