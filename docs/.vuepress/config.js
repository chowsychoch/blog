module.exports = {
    head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    title: 'Cho\'s blog',
    description: 'I am a Computer Science student. Here is my thoughts on my studying.',
    themeConfig: {
        type:'blog',
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
                    { text: 'LeetCode', link: '/category/leetcode.html' },
                    { text: 'Personal Notes', link: '/category/note.html' },
                    { text: 'Other', link: '/category/other.html' }
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
            { text: 'About', link: '/about.html' }

        ],
    }
}

