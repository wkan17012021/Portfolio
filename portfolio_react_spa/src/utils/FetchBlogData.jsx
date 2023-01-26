import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import Blogs from "../sections/blogs/Blogs";

const query = `
{
  user(username:"kDog") {
    publication {
      posts {
        _id
        title
        slug
        brief
        coverImage
      }
    }
  }
}`;

const FetchBlogData = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    fetch("https://api.hashnode.com", {
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
        const dataArr = Object.entries(data);
        const blogArr = [...dataArr[0][1].user.publication.posts]; 
        setBlogData(blogArr);
      });
  }, []);

  return <section id="blogs-section" className="scroll-mt-offset">
    <Container>
      {blogData && <Blogs blogs={blogData} />}
    </Container>
    </section>
};

export default FetchBlogData;
