class NewsApp {
  constructor(name, time) {
    this.name = name;
    this.time = time;
  }

  getArticle() {
    // 이부분을 구현해주세요
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${this.name} Article Loading Complete`);
      }, this.time * 1000);
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
    // 이부분을 구현해주세요
    try {
      const result = await app.getArticle();
      console.log(result);
      setTimeout(() => {
        console.log("Reading Complete");
      }, this.delay * 1000);
      this.delay += 1;
    } catch (error) {
      console.log("error");
    }
  }

  async readAllNews() {
    // 이부분을 구현해주세요
    const articles = this.apps;
    for (let article of articles) {
      const result = await this.readNews(article);
    }
  }

  subscribe(app) {
    // 이부분을 구현해주세요
    this.apps.push(app);
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
