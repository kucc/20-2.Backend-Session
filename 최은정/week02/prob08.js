class Alarm {
  constructor(message) {
    this.message = message;
  }

  alertAfterNSeconds(nSecond) {
    setTimeout(() => {
      console.log(this.message);
    }, nSecond);
  }
}

const alarm = new Alarm("Wake Up");
alarm.alertAfterNSeconds(2);
