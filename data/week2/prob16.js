class NewsApp {
  constructor(name, time) {
    this.name = name;
    this.time = time;
  }

  getArticle() {
    // 이부분을 구현해주세요
  }
}

class Customer {
  constructor(name, apps) {
    this.name = name;
    this.apps = apps;
    this.delay = 0;
  }

  async readNews(app) {
    // 이부분을 구현해주세요
  }

  async readAllNews() {
    // 이부분을 구현해주세요
  }

  subscribe(app) {
    // 이부분을 구현해주세요
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
