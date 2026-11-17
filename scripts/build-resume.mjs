import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const pdf = fs.readFileSync(path.join(root, 'resume/陈灿-简历.pdf')).toString('base64')
const docx = fs.readFileSync(path.join(root, 'resume/陈灿-简历.docx')).toString('base64')
const out = `// 简历原件内联为 data URI，保证单文件发布版也能直接查看/下载。
// 替换 resume/ 下的同名文件后，运行 \`node scripts/build-resume.mjs\` 重新生成。
export const resumePdfName = 'CHEN CAN-Resume.pdf'
export const resumeDocxName = 'CHEN CAN-Resume.docx'
export const resumePdf = 'data:application/pdf;base64,${pdf}'
export const resumeDocx = 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${docx}'
`
fs.writeFileSync(path.join(root, 'src/data/resume.js'), out)
console.log('resume.js updated')
