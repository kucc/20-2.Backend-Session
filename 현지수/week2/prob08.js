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
//this를 arrow function으로 :)
const alarm = new Alarm("Wake Up");
alarm.alertAfterNSeconds(2);
