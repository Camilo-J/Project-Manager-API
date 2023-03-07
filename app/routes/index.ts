import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleaName = cleanFileName(fileName);
  console.log(`${cleaName}`);
  if (cleaName !== "index") {
    import(`./${cleaName}`).then((moduleRouter) => {
      console.log(`se esta cargando la ruta... /${cleaName}`);

      router.use(`/${cleaName}`, moduleRouter.router);
    });
  }
});

export { router };
