import fs from "fs";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
// import prism from "markdown-it-prism";
import hljs from "highlight.js";

var md = require("markdown-it")({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ""; // use external default escaping
  },
});

export default function PostPage({ frontmatter, content }) {
  return (
    <div className="prose mx-auto max-w-3xl hover:prose-a:text-blue-500 prose-code:text-emerald-800 prose-pre:bg-slate-100 dark:prose-invert dark:hover:prose-a:text-orange-500 dark:prose-code:text-gray-300 dark:prose-pre:bg-slate-700">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  );
}

export async function getStaticPaths() {
  // Retrieve all our slugs
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    // invalid urls will go to 404
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
