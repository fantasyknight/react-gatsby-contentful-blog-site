import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MarketingLayout } from '@/layouts';

function BlogPage() {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allContentfulBlog {
          nodes {
            blogId
            title
            updatedAt
            isNew
            description {
              raw
            }
            image {
              gatsbyImageData
            }
          }
        }
      }
    `,
  );

  return (
    <MarketingLayout title="Blogs" description="">
      <h2 className="py-2">Blogs</h2>
      <div className="d-flex justify-start gap-3">
        {data.allContentfulBlog.nodes.map((blog) => (
          <Link
            className="card shadow-1 rounded-3 text-decoration-none blog-card"
            key={blog.blogId}
            to={`/blogs/${blog.blogId}`}
          >
            <GatsbyImage
              className="w-100 h-75"
              image={getImage(blog.image)}
              alt={blog.title}
            />
            <span className="p-2 text-center h6 text-dark">{blog.title}</span>
          </Link>
        ))}
      </div>
    </MarketingLayout>
  );
}

export default BlogPage;
