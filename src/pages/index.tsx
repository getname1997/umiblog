import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
// import { history } from "umi";
import './index.less';
export default function HomePage() {
  const [posts, setPosts] = useState<any[]>();

  async function refresh() {
    setPosts(() => {
      return [{ id: 's', title: 's', content: '415454' }];
    });
    console.log(posts);
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="flex flex-row w-full justify-center flex-wrap">
      {!posts && (
        <div className="fixed w-screen h-screen flex justify-center items-center">
          <p className="animate-pulse">Loading...</p>
        </div>
      )}
      {posts && (
        <div
          className="container flex flex-row w-full justify-center
       flex-wrap p-4 px-2 md:px-24 xl:px-64"
        >
          <Button>点击我呀</Button>
        </div>
      )}
    </div>
  );
}
