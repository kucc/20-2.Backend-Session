class NewsApp {
  constructor(name, time) {
    this.name = name;
    this.time = time;
  }

  getArticle() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.name);
      }, this.time * 1000); // 글을 가져오는 데 걸리는 고유한 시간
    });
  }
}

class Customer {
  constructor(name, apps) {
    this.name = name;
    this.apps = apps;
    this.delay = 0;
  }

  async readNews(app) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(app.name); // promise로 article을 반환
        console.log(`${app.name} 뉴스를 읽는 중...`);
      }, this.delay * 1000);
      this.delay++; // delay가 1초씩 증가함
    });
  }

  async readAllNews() {
    this.apps.map((app) => {
      return this.readNews(app); // readNews 함수를 사용하여 구독한 article을 순서대로 읽음
    });
  }

  subscribe(app) {
    this.apps.push(app); // 입력한 NewsApp을 apps에 포함
  }
}

const MBC = new NewsApp("MBC", 2);
const KBS = new NewsApp("KBS", 3);
const SBS = new NewsApp("SBS", 4);

const jiseong = new Customer("jiseong", []);

jiseong.subscribe(MBC);
jiseong.subscribe(KBS);
jiseong.subscribe(SBS);

jiseong.readAllNews();
