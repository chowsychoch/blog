module.exports = {
    head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    title: 'Cho\'s blog',
    logo: '/assets/img/lamp.png',
    description: 'I am a Computer Science student. Here is my thoughts on my studying.',
    themeConfig: {
        type:'blog',
        authorAvatar: '/lamp.png',
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
                { icon: 'reco-github', link: 'https://github.com/recoluan' },
                { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
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
                    { text: 'Email', link: 'https://www.linkedin.com/in/chowsy-cho/' }
                ]
            },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: 'About', link: '/about.html' }

        ],
        lastUpdated: 'Last Updated',
        author: 'Chowsy Cho'
    }
}

