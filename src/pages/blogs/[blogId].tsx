/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { MarketingLayout } from '@/layouts';

type BlogDetailProps = {
  blogId: string;
  data: any;
};

type BlogDetail = {
  title: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  image: IGatsbyImageData;
};

function BlogDetail({
  blogId,
  data: {
    allContentfulBlog: { nodes },
  },
}: BlogDetailProps) {
  const [data, setData] = useState<BlogDetail>();
  useEffect(() => {
    if (blogId && nodes) {
      const tmp = nodes.find((el) => el.blogId === parseInt(blogId, 10));
      setData(tmp);
    }
  }, [blogId, nodes]);

  return (
    <MarketingLayout
      title={data ? data.title : ``}
      description={data ? data.title : ``}
    >
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {data && data.title}
            </li>
          </ol>
        </nav>
        {data && (
          <div className="d-flex p-3 gap-3">
            <div className="d-block w-25 ">
              <GatsbyImage
                className="w-100 h-100 rounded-5"
                image={getImage(data.image)}
                alt={data.title}
              />
            </div>
            <div className="w-75 px-2">
              <p className="h3">{data.title}</p>
              <div>{renderRichText(data.description)}</div>
            </div>
          </div>
        )}
      </div>
    </MarketingLayout>
  );
}

export const query = graphql`
  query GetBlogDetail {
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
`;

export default BlogDetail;
