const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'images', 'major_attractions');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const banakarUrl = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlk2MeJIbthBUHVA14jo7N-iP5R4vTZWMlgKB6AbsJPDt0IXBCTMr8LEYHjKdHhZdaGTY2Ve9ancSZB0WBfrFtBM4QCbfTIxEsydU31IJLeXsPCxs6RteHTKLiEzG1BD-6YPxdT=w800-h600-k-no';
  const bilagiUrl = 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlA9Q7icYwOQ0D3C_Sj-_J_sj_xtO043fvNm9omnltIKEHGS4zWbd1rBmIHU6V5FSzHC6aVEs6l_nJd3PfLJdvNSznBzPSd6iKghkyYiFjxPesc9pd53hl5xk_u6Q0TD29pmFnp8zA4Ejo3=w800-h600-k-no';
  const royalUrl = 'https://lh3.googleusercontent.com/gpms-cs-s/AFP8RcN2qgJx590lZqQ-R6ulQ2WdmQnryn3H4BIRDsBTyi9nXtJ7XcisYWCCDWa9RguJAwJekm32ms65yThaHE6iJDuhDNCcWwdGqIqNm5pMKzYcUhY1JSxHE383MDR8hL-fviRThaLG=w800-h600-k-no';

  console.log('Downloading Banakar Towers image...');
  await download(banakarUrl, path.join(dir, 'Banakar Towers Lodging & Boarding banhatti.jpg'));
  
  console.log('Downloading Bilagi Agro Resort image...');
  await download(bilagiUrl, path.join(dir, 'Bilagi River Valley Agro Resort & Homestay.jpg'));

  console.log('Downloading Hotel Royal Executive image...');
  await download(royalUrl, path.join(dir, 'Hotel Royal Executive & City Pride.jpg'));

  // Ghataprabha backwaters
  const ghataSrc = path.join(dir, 'Ghataprabha backwaters viewpoint');
  const ghataDest = path.join(dir, 'Ghataprabha backwaters viewpoint.webp');
  if (fs.existsSync(ghataSrc) && !fs.existsSync(ghataDest)) {
    fs.copyFileSync(ghataSrc, ghataDest);
    console.log('Copied Ghataprabha backwaters viewpoint.webp');
  }

  console.log('Done downloading and copying images!');
}

run().catch(console.error);
