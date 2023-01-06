import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.locale('en')
dayjs.extend(utc)

export enum activityDate {
  christmasDate = '2021-12-26T00:00:00.000Z'
}

//date 2021-12-26T00:00:00.000Z
export const theActivityIsEndedOfDate = (date: string) => {
  const nowUtcTimestamp = dayjs.utc().unix()
  const activityEntUtcTimestamp = dayjs.utc(date).unix()
  const isActivityEnded = nowUtcTimestamp > activityEntUtcTimestamp
  !isActivityEnded &&
    console.log(
      nowUtcTimestamp,
      activityEntUtcTimestamp,
      isActivityEnded,
      'nowUtcTimestamp-activityEntUtcTimestamp-isActivityEnded'
    )
  return isActivityEnded
}

export const isActivity = () => {
  return !theActivityIsEndedOfDate(activityDate.christmasDate)
}
