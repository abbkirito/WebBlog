import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export const formatDate = {
  relative: (date: string | Date) => {
    return dayjs(date).fromNow()
  },
  
  standard: (date: string | Date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm')
  },
  
  dateOnly: (date: string | Date) => {
    return dayjs(date).format('YYYY-MM-DD')
  }
}

export default dayjs