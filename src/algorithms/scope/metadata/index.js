import extract from './extract'
import { createFolder } from '../../.././tools'

const keys = (obj) => Object.keys(obj)
const asc = (a, b) => a.num ? a.num - b.num : b.num
const missingFiles = (files) => files === undefined
const noFiles = (files) => !files.length

const metadata = (scope, section) => (relativePath) => {
  const files = section[relativePath]
  const filesIsArray = Array.isArray(files)

  if (missingFiles(files) || (filesIsArray && noFiles(files))) {
    return false
  }

  if (filesIsArray) {
    section[relativePath] = files.map(extract).sort(asc)
    return section[relativePath]
  }

  keys(files).map(metadata(section[relativePath], files))
}

export default metadata
