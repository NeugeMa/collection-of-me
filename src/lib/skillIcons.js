import { Cloud, Database, HardDrive, Terminal } from 'lucide-react'
import { FaFileExcel } from 'react-icons/fa'
import { SiDotnet, SiGo, SiJavascript, SiNodedotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si'

export const SKILL_ICONS = {
  'JavaScript': SiJavascript,
  'React.js': SiReact,
  'C#': SiDotnet,
  'Go': SiGo,
  'TypeScript': SiTypescript,
  'Node.js': SiNodedotjs,
  'Python': SiPython,
  'Microsoft Excel': FaFileExcel,
  'SQL': Database,
  'Azure': Cloud,
  'CMD': Terminal,
  'Cloud': Cloud,
  'Hardware': HardDrive,
}
