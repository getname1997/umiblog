import React, { useState } from 'react';
// @ts-ignore
import { history } from 'umi';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import commonStorage from '../utils/commonStorage';
import server from '@/request/server';
import api from '@/request/api';
export default function () {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  async function submit() {
    try {
      const res = await server(api.login, { username, password }, 'post');
      if (res.code !== 200) {
        console.error(res, '登录失败');
        return;
      }
      commonStorage.set('token', 'Bearer  ' + res.data.token);
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full flex justify-center">
      <div className="container lg:px-64 px-8 pt-16">
        <p className="text-3xl font-extrabold">用户登入</p>
        <div className="mt-8">
          <p>账号</p>
          <TextInput value={username} onChange={setUsername} />
          <p className="mt-4">密码</p>
          <TextInput value={password} onChange={setPassword} />
          <Button onClick={submit}>登入</Button>
        </div>
      </div>
    </div>
  );
}
