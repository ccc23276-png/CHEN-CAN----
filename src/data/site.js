// ---------------------------------------------------------------
// 站点内容都在这里维护。改文案、换作品、换图片只改这个文件即可。
// 图片/视频放在 src/assets，替换同名文件即可；完整版视频在 src/assets/full。
// ---------------------------------------------------------------

import portraitImg from '../assets/portrait.jpg'
import heroPosterImg from '../assets/hero-poster.jpg'

import fullReal from '../assets/full/real.mp4'
import fullCg from '../assets/full/cg.mp4'
import fullFight from '../assets/full/fight.mp4'
import fullNextgen from '../assets/full/nextgen.mp4'

import posterReal from '../assets/poster-real.jpg'
import posterCg from '../assets/poster-cg.jpg'
import posterFight from '../assets/poster-fight.jpg'
import posterNextgen from '../assets/poster-nextgen.jpg'

import gallery01 from '../assets/gallery-01.jpg'
import gallery02 from '../assets/gallery-02.jpg'
import gallery03 from '../assets/gallery-03.jpg'
import gallery04 from '../assets/gallery-04.jpg'

import toolMidjourney from '../assets/tools/midjourney.png'
import toolJimeng from '../assets/tools/jimeng.png'
import toolNano from '../assets/tools/nano-banana.png'
import toolCapcut from '../assets/tools/capcut.png'
import toolWorkbuddy from '../assets/tools/workbuddy.png'
import toolChatgpt from '../assets/tools/chatgpt.png'

import { resumePdf, resumeDocx, resumePdfName, resumeDocxName } from './resume'

export const media = {
  portrait: portraitImg,
  heroPoster: heroPosterImg
}

export const profile = {
  nameEn: 'CHEN CAN',
  age: 22,
  location: '江苏 · 徐州',
  phone: '175 8541 0625',
  phoneRaw: '+8617585410625',
  email: '2197626355@qq.com',
  role: '视觉设计师 / AI 设计师',
  focus: 'AIGC 漫剧 / AI 影像',
  intro: [
    '视觉设计师 / AI 设计师。用 Midjourney、即梦与 Nano Banana 完成 AIGC 漫剧的角色、分镜与成片。'
  ],
  metrics: [
    { value: '2023', label: '开始影像创作', note: '个人项目 / 持续实践' },
    { value: '04', label: 'AIGC 漫剧作品线', note: '真人 / CG / 打斗 / 次世代' },
    { value: '06', label: 'AIGC 工具链', note: 'MJ / 即梦 / Nano Banana' },
    { value: '04', label: '独立交付环节', note: '设定 / 分镜 / 生成 / 剪辑' }
  ]
}

export const resume = {
  pdf: resumePdf,
  docx: resumeDocx,
  pdfName: resumePdfName,
  docxName: resumeDocxName
}

export const projects = [
  {
    id: 'live-action',
    index: '001',
    title: '真人漫剧',
    titleEn: 'LIVE-ACTION',
    category: 'AIGC 漫剧 · 真人质感',
    year: '2026',
    desc: '一段古装宫廷日常：自然光穿过纱帘，人物在低饱和的室内空间里完成情绪转换。用真人质感的生成流程，测试表演、服化与镜头调度的一致性。',
    role: '角色设定 / 分镜 / 生成 / 剪辑',
    video: fullReal,
    fullDuration: '01:00',
    poster: posterReal,
    span: 'half'
  },
  {
    id: 'cg-drama',
    index: '002',
    title: 'CG 漫剧',
    titleEn: 'CG DRAMA',
    category: 'AIGC 漫剧 · CG 写实',
    year: '2026',
    desc: 'CG 写实古装双人戏：从角色定妆到双人镜头，重点解决面部稳定性、布料质感与眼神交流，让生成画面具备连续叙事的能力。',
    role: '角色 / 分镜 / 生成 / 剪辑',
    video: fullCg,
    fullDuration: '02:00',
    poster: posterCg,
    span: 'half'
  },
  {
    id: 'cg-fight',
    index: '003',
    title: 'CG 打斗',
    titleEn: 'CG FIGHT',
    category: '动作设计 · CG 打斗',
    year: '2026',
    desc: '冰系法师对战狼人战士：把法术蓄力、粒子冲击与镜头推拉拆成可复用的动作节拍，在一条完整的攻防转换里验证节奏。',
    role: '动作设计 / 生成 / 剪辑',
    video: fullFight,
    fullDuration: '00:25',
    poster: posterFight,
    span: 'half'
  },
  {
    id: 'nextgen',
    index: '004',
    title: '次世代 CG 国漫',
    titleEn: 'NEXT-GEN',
    category: '国漫 · 次世代视觉',
    year: '2026',
    desc: '云海仙境的少女日常：轻表演、大场景与体积光，验证次世代国漫在自然环境、景深与角色微表情上的表现力。',
    role: '角色 / 场景 / 生成 / 剪辑',
    video: fullNextgen,
    fullDuration: '00:50',
    poster: posterNextgen,
    span: 'half'
  },
  {
    id: 'visual-dev',
    index: '005',
    title: '角色与场景设定',
    titleEn: 'VISUAL DEVELOPMENT',
    category: '设定 / 三视图 / 场景',
    year: '2026',
    desc: '从三视图、角色定妆到场景概念，先建立可复用的视觉资产，再进入分镜与生成。',
    role: '视觉开发 / 设定',
    gallery: [gallery01, gallery02, gallery03, gallery04],
    captions: ['宫廷场景', '冰系法师', '夜城战场', '护甲设定'],
    scope: [
      ['场景概念', '宫廷 / 夜城 / 战场'],
      ['角色定妆', '真人 / CG 双线'],
      ['道具与护甲', '剑、护甲、法器'],
      ['风格锚点', '低饱和 / 体积光 / 电影感']
    ],
    span: 'wide'
  }
]

export const capabilities = [
  {
    title: '提示词工程',
    desc: '把视觉需求拆成镜头、光影、材质与风格的可执行描述。'
  },
  {
    title: '视觉叙事',
    desc: '从分镜到成片，让每一帧服务于同一个情绪。'
  },
  {
    title: '影像与剪辑',
    desc: '取景、构图、素材筛选与节奏处理，来自真实的拍摄现场。'
  },
  {
    title: '画面构成',
    desc: '用构图、光影与色彩建立画面的秩序与记忆点。'
  },
  {
    title: 'AI 工作流',
    desc: '把生图、生视频与脚本工具串成可复用的生产流程。'
  },
  {
    title: '协作与交付',
    desc: '按节点交付，接受多轮修改，对时间与质量有交代。'
  }
]

export const toolGroups = [
  {
    label: '图像生成',
    labelEn: 'IMAGE GEN',
    tools: [
      { name: 'Midjourney', icon: toolMidjourney },
      { name: '即梦', icon: toolJimeng },
      { name: 'Nano Banana', icon: toolNano }
    ]
  },
  {
    label: '视频与剪辑',
    labelEn: 'VIDEO / EDIT',
    tools: [
      { name: '即梦', icon: toolJimeng },
      { name: '剪映', icon: toolCapcut }
    ]
  },
  {
    label: '协作与脚本',
    labelEn: 'AGENT',
    tools: [
      { name: 'WorkBuddy', icon: toolWorkbuddy },
      { name: 'ChatGPT', icon: toolChatgpt }
    ]
  }
]

export const navItems = [
  { label: '经历', href: '#profile' },
  { label: '优势', href: '#capabilities' },
  { label: '作品', href: '#work' },
  { label: '简历', href: '#contact' },
  { label: '联系', href: '#contact' }
]
