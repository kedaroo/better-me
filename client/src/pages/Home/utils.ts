// @ts-nocheck
export function getDayofYear(date) {
  var now = new Date(date);
  var start = new Date(now.getFullYear(), 0, 0);
  var diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}

export function getProgressByDayNumber(progress: any) {
  let levelsData = {};
  let data = {};
  let progressArr = [];

  for (let prog of progress) {
    const day = getDayofYear(prog.timestamp);
    data[day] = prog.quality
  }

  for (let i = 0; i < 365; i++) {

    if(data[i]) {
      levelsData[i] = data[i]
    } else {
      levelsData[i] = 0
    }
  }

  return levelsData;
}

export const getAverageSleepQuality = (logs: any) => {

  if(!logs) {
    return "0";
  }

  if(logs.length === 0) {
    return "0";
  }

  let sum = 0

  for(let i = 0; i < logs.length; i++) {
    sum += logs[i].quality;
  }

  const average = parseInt(sum/logs.length)

  if(average === 0) {
    return "0"
  }

  let str = "";
  for(let i = 0; i < average; i++) {
    str += "⭐"
  }

  return str;
}