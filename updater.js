const fs = requireModule("node:fs");
const fetch = requireModule("node-fetch");

function checkVersion(CV, V) {
	console.log(CV, V);
	if (CV == V) return false;
	const CVersions = CV.split(",").map(i => parseInt(i));
	const Versions = V.split(",").map(i => parseInt(i));
	for (const version of CVersions) {
		console.log(version, Versions[CVersions.indexOf(version)]);
		if (version < Versions[CVersions.indexOf(version)]) return true;
	}
	return false;
}

export default async file => {
	file += ".js";
	var dirname = __dirname.split("/");

	dirname.pop();
	dirname.pop();

	dirname = dirname.join("/") + "/plugins";

	let CV = fs.readFileSync(`${dirname}/${file}`, "utf8");
	CV = CV.split('version:"')[2].split('",')[0];

	const data = await fetch(`https://raw.githubusercontent.com/TBHGodPro/SolarStatsPlugins/main/Plugins%20(Compressed)/${file}`).then(res => res.text());
	const V = data.split('version:"')[2].split('",')[0];

	if (checkVersion(CV, V)) {
		setTimeout(() => {
			Logger.info(`UPDATING PLUGIN FROM ${CV} TO ${V}, PLEASE RESTART SOLAR STATS`);
			fs.writeFile(`${dirname}/${file}`, data, {}, () => {});
		}, 500);
	}
};
