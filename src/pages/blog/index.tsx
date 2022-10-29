import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mt-10 mb-5 text-5xl font-bold">Blog</div>
        {/* Post cycle */}
        <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 md:p-0 auto-rows-max">
          {posts.map(({ slug, frontmatter }) => (
            /*  Single post */
            <div
              key={slug}
              className="flex m-2 overflow-hidden border border-gray-200 rounded-lg shadow-lg cursor-pointer flex-colself-stretch dark:bg-zinc-800 dark:border-none"
            >
              <Link href={`/blog/post/${slug}`}>
                <div className="items-start">
                  <Image
                    width={650}
                    height={340}
                    alt={frontmatter.title}
                    src={`/${frontmatter.socialImage}`}
                  />

                  {/* Post title */}
                  <h1 className="p-4 my-4 text-2xl font-bold text-center">
                    {frontmatter.title}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get all our posts
  const files = fs.readdirSync("posts");

  // loop over the posts and read the contents
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // return the posts
  return {
    props: {
      posts,
    },
  };
}
