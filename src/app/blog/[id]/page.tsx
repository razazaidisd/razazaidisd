const BlogPage = (props: any) => {
  return (
    <div>
      <h1>Blog page</h1>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
};
export default BlogPage;
