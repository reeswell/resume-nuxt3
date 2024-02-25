import { Github, MdiBlogger } from '#components'
import type { Resume } from '~/types'

export const data: Resume = {
  profile: {
    name: 'XXX',
    role: '前端开发工程师',
    location: '深圳',
    email: 'xxx@gmail.com',
    phone: 'xxxxxxxxxxx',
    birth: '1999-09-09',
    socialAccounts: [
      {
        name: '博客',
        link: 'https://ibbicode.gitbook.io/notes',
        icon: MdiBlogger,
      },
      {
        name: 'Github',
        link: 'https://github.com/reeswell',
        icon: Github,
      },
    ],

  },
  experiences: [
    {
      company: 'xxx科技有限公司',
      role: '前端开发工程师',
      location: '深圳',
      time: '2021/07 - 至今',
      projects: [
        {
          name: '中后台管理系统',
          link: '',
          role: '负责xxx内部管理系统的开发工作：',
          descriptions: [
            '使用 Vue3 以及 Typescript 作为开发框架和语言',
            '使用 Pinia，Vue Router 以及 VueUse 等一系列最新周边生态工具',
            'xxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxx',
          ],
          hard: {
            title: '使用如下技术攻克一系列技术难题：',
            descriptions: [
              '二次封装 Vue Virtual Scroller 借助虚拟渲染的设计，提升大数据量渲染的性能问题',
              'xxxxxxxxxxxxxxxxxxxxxx',
              'xxxxxxxxxxxxxxxxxxxxxx',
            ],
          },
        },
        {
          name: '国际站',
          link: '',
          role: '主导和开发xxx国际站 Web 端架构设计以及开发工作',
          descriptions: [
            '使用 Nuxt.js 以及 Typescript 作为开发框架和语言',
            '使用 VueUse 以及 Pinia 等一系列最新周边生态工具',
            'xxxxxxxxxxxxxxxxxxxxxx',
          ],
        },
      ],
    },
    {
      company: ' xxx科技有限公司',
      role: '前端开发工程师',
      location: '北京',
      time: '2020/07 - 2021/06',
      projects: [
        {
          name: '中后台管理系统',
          link: '',
          role: '负责xxx内部管理系统的开发工作：',
          descriptions: [
            '使用 Vue3 以及 Typescript 作为开发框架和语言',
            '使用 Pinia，Vue Router 以及 VueUse 等一系列最新周边生态工具',
            'xxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxx',
            'xxxxxxxxxxxxxxxxxxxxxx',
          ],
          hard: {
            title: '使用如下技术攻克一系列技术难题：',
            descriptions: [
              '二次封装 Vue Virtual Scroller 借助虚拟渲染的设计，提升大数据量渲染的性能问题',
              'xxxxxxxxxxxxxxxxxxxxxx',
              'xxxxxxxxxxxxxxxxxxxxxx',
            ],
          },
        },
        {
          name: '国际站',
          link: '',
          role: '主导和开发xxx国际站 Web 端架构设计以及开发工作',
          descriptions: [
            '使用 Nuxt.js 以及 Typescript 作为开发框架和语言',
            '使用 VueUse 以及 Pinia 等一系列最新周边生态工具',
            '使用 Daisy UI 以及Tailwind.css 作为无样式组件库以及样式解决方案',
          ],
        },
      ],
    },
  ],

  educations: [
    {
      name: 'xx大学',
      time: '2016/09 - 2020/07',
      major: '软件工程',
      degree: '学士',
    },
  ],
  skills: [
    {
      name: '使用 Javascript（ES6）/ Typescript 进行前端开发，并且熟练掌握以下框架',
      descriptions: [
        '使用 Vue3 以及周边工具：Vite、Vue-Router、Pinia、VueUse 以及 Element-Plus 进行 Web 开发',
        'xxxxxxxxxxxxxxxxxxxxxx',
      ],
    },
    {
      name: '熟练使用 CSS3 以及周边工具',
      descriptions: [
        'Sass 以及 PostCSS 作为预处理器',
        'xxxxxxxxxxxxxxxxxxxxxx',
      ],
    },
    {
      name: '掌握通用的前端工程化以及构建工具',
      descriptions: [
        '使用 Webpack/Vite 完成Web 应用打包以及对应的前端性能优化的经验',
        'xxxxxxxxxxxxxxxxxxxxxx',
      ],
    },
  ],
  personalProjects: [
    {
      name: 'Resume for Nuxt 3',
      github: 'https://github.com/reeswell/resume-nuxt3',
      description: '使用 Nuxt3 框架开发，展示个人简历',
      website: 'https://resume-nuxt3.vercel.app',
      stars: 50,
    },
  ],
}
