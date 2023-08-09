import React, { useState, useEffect } from 'react';
import server from '@/request/server';
import api from '@/request/api';

const BlogList: React.FC = () => {
  const [blogList, setBlogList] = useState([]);
  const getBlogList = async () => {
    const { data } = await server(api.getBlogList);
    setBlogList(data.list);
  };
  useEffect(() => {
    getBlogList();
  }, []);
  return (
    <>
      {blogList.length > 0 &&
        blogList.map((item: any) => {
          return (
            <div key={item.id}>
              <div>名称:{item.title}</div>
              <div>内容：{item.content}</div>
            </div>
          );
        })}
    </>
  );
};

export default BlogList;
