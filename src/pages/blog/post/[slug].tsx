import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export default function PostPage({ frontmatter, content }) {
  return (
    <div className="mx-auto prose dark:prose-invert prose-code:text-emerald-800 dark:prose-code:text-gray-300 hover:prose-a:text-blue-500 dark:hover:prose-a:text-orange-500 prose-pre:bg-slate-100 dark:prose-pre:bg-slate-700">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
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
