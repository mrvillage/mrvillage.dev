const { mkdirSync, existsSync, writeFileSync, readFileSync } = require("fs");

if (!existsSync("./content-dist")) {
  mkdirSync("./content-dist");
}

const types = ["Author", "Post"];

for (const t of types) {
  const path = `./.contentlayer/generated/${t}/_index.json`;
  const contents = readFileSync(path).toString();
  const allDocuments = JSON.parse(contents);

  // const allDocuments: any[] = [];
  for (const doc of allDocuments) {
    const path = `${doc._raw.flattenedPath}.js`;
    const dir = path.split("/").slice(0, -1).join("/");
    if (!existsSync(`./content-dist/${dir}`)) {
      mkdirSync(`./content-dist/${dir}`, { recursive: true });
    }
    // export default function Document(${Object.keys(components).join(", ")}) {
    const content = `
export default function Document(React, ReactDOM, _jsx_runtime) {
  ${doc.body.code}
}
`;
    writeFileSync(`./content-dist/${path}`, content);
  }
}
