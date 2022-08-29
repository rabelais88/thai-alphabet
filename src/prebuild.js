/** node.js prebuild file */
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as d3 from 'd3';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataPath = path.join(__dirname, 'constants', 'thai-data.csv');
const writePath = path.join(__dirname, 'constants', 'alphabets.json');

const prebuild = async () => {
  console.log('reading file from', dataPath);
  const data = fs.readFileSync(dataPath).toString();
  const csv = d3.csvParse(data);
  console.log('columns', csv.columns);
  console.log(Array.from(csv).slice(-1));
  fs.writeFileSync(writePath, JSON.stringify(csv), { encoding: 'utf8' });
};

prebuild();
