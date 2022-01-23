import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
// const posts = [
//   { title: "react testing", excerpt: "learn learn testing" },
//   { title: "react tailwind", excerpt: "learn react tailwind" },
// ];

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      {/* tailwind css의 문법 */}
      <Head>
        <title>CMS blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relatve top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
};
