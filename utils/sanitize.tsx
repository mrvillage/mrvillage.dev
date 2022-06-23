import sanitize from "sanitize-html";

export function defaultSanitizeContent(content: string) {
  return sanitize(content, {
    allowedTags: sanitize.defaults.allowedTags.concat(["img"]),
    allowedClasses: {
      "*": ["ql-*"],
    },
  });
}
