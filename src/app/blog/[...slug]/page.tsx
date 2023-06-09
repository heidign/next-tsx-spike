const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time);
  });

const getData = async (slug: string) => {
  const post = await delay(5000);
  return { slug };
};

type Params = {
  slug: string
}

export default async function BlogPost({ params} : { params: Params }) {
  const { slug } = params;
  const post = await getData(slug);
  console.log();
  throw new Error('Error')
  return (
    <>
      <div>Blog Post</div>
      <div>{post.slug}</div>
    </>
  );
}
