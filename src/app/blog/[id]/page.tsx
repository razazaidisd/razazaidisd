const BlogPage = (props: any) => {
  return (
    <div>
      <h1>Blog page</h1>
      <pre>{JSON.stringify(props, 2, 2)}</pre>
    </div>
  );
};
export default BlogPage;
