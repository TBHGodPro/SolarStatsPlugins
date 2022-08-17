const fs = requireModule("node:fs");
const callerPath = require("caller-path").default;

function checkVersion(CV, V) {
  if (CV == V) return false;
  const CVersions = CV.split(".").map((i) => parseInt(i));
  const Versions = V.split(".").map((i) => parseInt(i));
  var index = 0;
  for (const version of CVersions) {
    if (CVersions[index] < Versions[index]) return true;
    index += 1;
  }
  return false;
}

export default async () => {
  var file = callerPath();
  file = file.split("/")[file.split("/").length - 1];
  var dirname = __dirname.split("/");

  dirname.pop();
  dirname.pop();

  dirname = dirname.join("/") + "/plugins";

  let CV = fs.readFileSync(`${dirname}/${file}`, "utf8");
  CV = CV.split('version:"')[CV.split('version:"').length - 1].split('",')[0];

  const data = await fetch(
    `https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${file}`
  );
  if (!data || data == "404: Not Found") return;
  const V = data
    .split('version:"')
    [data.split('version:"').length - 1].split('",')[0];

  if (checkVersion(CV, V)) {
    setTimeout(() => {
      Logger.info(
        `UPDATING PLUGIN FROM ${CV} TO ${V}, PLEASE RESTART SOLAR STATS`
      );
      fs.writeFile(`${dirname}/${file}`, data, {}, () => {});
    }, 500);
  }
};
