"use client"

import Link from 'next/link';
import React from 'react';

interface BlogGridMainProps {
    Slug: string;
    blogImage: string;
    blogTitle?: string;
}

const BlogGridMain: React.FC<BlogGridMainProps> = ({
    Slug,
    blogImage,
    blogTitle,
}) => {
    return (
        <>
            <Link href={`/blog/${Slug}`} className="thumbnail">
                <img src={`assets/images/blog/${blogImage}`} alt="blog-area" />
            </Link>
            <div className="inner-content-body">
                <div className="tag-area">
                    <div className="single">
                        <i className="fa-light fa-clock" />
                        <span>15 Sep, 2023</span>
                    </div>
                    <div className="single">
                        <i className="fa-light fa-folder" />
                        <span>Modern Fashion</span>
                    </div>
                </div>
                <Link className="title-main" href={`/blog/${Slug}`}>
                    <h3 className="title animated fadeIn">
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </h3>
                </Link>
                <div className="button-area">
                    <Link
                        href={`/blog/${Slug}`}
                        className="rts-btn btn-primary radious-sm with-icon"
                    >
                        <div className="btn-text">Read Details</div>
                        <div className="arrow-icon">
                            <i className="fa-solid fa-circle-plus" />
                        </div>
                        <div className="arrow-icon">
                            <i className="fa-solid fa-circle-plus" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogGridMain;
