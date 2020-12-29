import express from "express";

class App {
  public app: express.Application;

  public static bootstrap(): App {
    return new App();
  }

  constructor() {
    this.app = express();
    this.app.get("/", (_req: express.Request, res: express.Response) => {
      res.send("Hello world");
    });
  }
}

export default App;
