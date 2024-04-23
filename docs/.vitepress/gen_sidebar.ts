// import path from "path"
// import fs from "fs"

// // 获取文件根目录
// const DIR_PATH = path.resolve() + '/docs'
// console.log(DIR_PATH)
// // 白名单，过滤不需要生成侧边栏的文件和文件夹
// const WHITE_LIST: string[] = ['index.md', '.vitepress', 'node_modules', ]

// // 判断是不是文件夹
// const isDirectory = (source: string) => fs.lstatSync(source).isDirectory()

// // 获取文件列表
// const getDirectories = (source: string) =>
//   fs.readdirSync(source).map((name) => path.join(source, name)).filter(isDirectory)

// // 取差值
// const intersections = (arr1: string[], arr2: string[]) => {
//   return Array.from(new Set(arr1.filter((v) => !arr2.includes(v))))
// }

// export const set_sidebar = (pathname: string) => {
//   // 获取 pathname 的路径
//   const dirname = path.join(DIR_PATH, pathname)
//   // 读取 pathname 下的所有文件或文件夹
//   const files = fs.readdirSync(dirname)
//   // 过滤掉
//   const filter_files = intersections(files, WHITE_LIST)
//   console.log(filter_files)
//   return {}
// }
