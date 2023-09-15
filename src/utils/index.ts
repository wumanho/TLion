import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

/**
 * 扫描工作目录下左右 provide 文件
 * @param dirPath 入口目录
 * @returns
 */
export function scanDirectory(dirPath: string) {
  const files = fs.readdirSync(dirPath)
  const results = []
  for (const file of files) {
    const filePath = path.join(dirPath, file)
    const stats = fs.statSync(filePath)

    if (stats.isDirectory() && file !== 'node_modules') {
      results.push(...scanDirectory(filePath))
    } else if (stats.isFile() && file.endsWith('.provider.ts')) {
      results.push(pathToFileURL(path.resolve(filePath)).href)
    }
  }
  return results
}
