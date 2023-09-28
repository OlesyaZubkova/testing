class AlarmClock {
  constructor(alarmCollection, intervalId) {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    for (let i = 0; i < this.alarmCollection.length; i++) {
      if (this.alarmCollection[i].time === time) {
        console.warn('Уже присутствует звонок на это же время');
      }
    }
    this.alarmCollection.push({
      callback,
      time,
      canCall: true
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((t) => t.time !== time);
  }

  getCurrentFormattedTime(time) {
    let date = new Date();
    
    // функция, добавляющая ведущий ноль
    function leadingZero(token) {
      return ("0" + token).slice(-2)
    }
    
    let hours = leadingZero(date.getHours()),
        minutes = leadingZero(date.getMinutes());
  
    return`${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((e) => {
        if (e.time === this.getCurrentFormattedTime() && e.canCall) {
          e.canCall = false;
          e.callback()
        }
      });
    }, 1000) 
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((e) => e.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
