import md from "markdown-it";

const Markdown = new md({
  breaks: true,
  html: true,
});

export { Markdown };
