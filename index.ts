import { Application } from "https://deno.land/x/oak/mod.ts";
import { Router } from "./deps.ts";

import DefaultController from "./DefaultController.ts";
const app = new Application();

const router: Router = new Router();
router.register(DefaultController);

app.use(router.middleware());
console.log("Project ready to go!");
await app.listen({ port: 8000 });
