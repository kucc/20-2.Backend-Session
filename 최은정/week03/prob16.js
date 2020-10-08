class NewsApp {
  constructor(name, time) {
    this.name = name;
    this.time = time;
  }

  getArticle() {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(`This is ${this.name} article`),
        this.time * 1000
      );
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
    const article = await app.getArticle();
    console.log(article);
    app.time;
    // const read = await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(`I finished ${app} article.`);
    //   }, this.delay);
    // });
    // const doRead = await read;
    // console.log(article);
    // console.log(doRead);
  }

  async readAllNews() {
    for (let i = 0; i < this.apps.length; i++) {
      const read = this.readNews(this.apps[i]);
    }

    // for (app of this.apps) {
    // console.log(this.readNews(app.name));
    // this.delay += 1000;
  }

  subscribe(app) {
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
// MBC.getArticle();
// jiseong.readNews(MBC);
