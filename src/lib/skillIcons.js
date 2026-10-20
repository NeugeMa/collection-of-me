import { Cloud, Database, HardDrive, Terminal } from 'lucide-react'
import { FaFileExcel } from 'react-icons/fa'
import {
  SiDocker,
  SiDotnet,
  SiExpo,
  SiFastapi,
  SiGo,
  SiJavascript,
  SiNodedotjs,
  SiPandas,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export const SKILL_ICONS = {
  'JavaScript': SiJavascript,
  'React': SiReact,
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
  'Oracle': Database,
  'FastAPI': SiFastapi,
  'Pandas': SiPandas,
  'Docker': SiDocker,
  'TailwindCSS': SiTailwindcss,
  'Expo': SiExpo,
}
