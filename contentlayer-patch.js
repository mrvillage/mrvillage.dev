const { mkdirSync, existsSync, writeFileSync, readFileSync } = require("fs");

const types = ["Author", "Post", "Page"];

for (const t of types) {
  const documents = JSON.parse(
    readFileSync(`./.contentlayer/generated/${t}/_index.json`).toString()
  );

  for (const doc of documents) {
    const path = `${doc._raw.flattenedPath}.js`;
    const dir = path.split("/").slice(0, -1).join("/");
    if (!existsSync(`./content-dist/${dir}`)) {
      mkdirSync(`./content-dist/${dir}`, { recursive: true });
    }
    writeFileSync(
      `./content-dist/${path}`,
      `export default function Document(React, ReactDOM, _jsx_runtime) {
  ${doc.body.code}
}
`
    );
  }
}
