module.exports = {
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
        {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          }
      ],
      sidebar: [
        {
            title: '基础',   // 必要的
            path: '/guide/安装/',      // 可选的, 应该是一个绝对路径
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/guide/安装/'
            ]
          }
      
      ]
    }
  }