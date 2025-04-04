import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import Blogs from "../components/blogs/Blogs";

const query = `
query Publication {
    publication(host: "the-dog-can-blog.hashnode.dev") {
        posts(first: 5) {
            edges {
                node {
                    title
                    brief
                    url
         	 					coverImage {
            					url
          					}
                      slug
                }
            }
        }
    }
}`;

const FetchBlogData = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    fetch("https://gql.hashnode.com", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        const posts = data.data.publication.posts.edges;
        setBlogData(posts);
      });
  }, []);

  return <section id="blogs-section" className="scroll-mt-offset">
    <Container>
      {blogData && <Blogs blogs={blogData} />}
    </Container>
    </section>
};

export default FetchBlogData;
