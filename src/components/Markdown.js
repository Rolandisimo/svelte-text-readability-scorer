
import MD from "markdown-it"

export class Markdown {
  constructor() {
    this.markdown = new MD({
      breaks: true,
      html: true,
    });
  }

  render(value) {
    return this.markdown.render(value);
  }
}

