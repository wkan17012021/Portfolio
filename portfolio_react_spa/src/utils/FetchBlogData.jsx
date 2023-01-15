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
        // console.log(data); observe if the data gets retrieved as promise obj
        const dataArr = Object.entries(data); // convert to array of nested objs
        // console.log(dataArr[0][1].user.publication.posts); drill down into nested obj array
        const blogArr = [...dataArr[0][1].user.publication.posts]; // spread into new array
        // console.log(blogArr.blogs to access each item);
        setBlogData(blogArr);
      });
  }, []);

  return <section id="blogs-section">{blogData && <Blogs blogs={blogData} />}</section>;
};

export default FetchBlogData;
