import React from 'react';
import { Head, Link } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';

export default function Manager({ users }) {
  const checkDelete = () => {
    return confirm('本当に削除しますか？');
  };

  return (
    <HeaderLayout>
      <title>管理者画面</title>
      <div className="container p-5">
        <h2>管理者画面</h2>

        <div className="alldata py-4 my-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>名前</th>
                <th>email</th>
                <th>登録日</th>
                <th>
                  管理者：０<br />
                  利用者：１
                </th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {users.data.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.day}</td>
                  <td>{user.role}</td>
                  <td>
                    <Link
                      href={route('user_delete', { id: user.id })}
                      onClick={() => checkDelete()}
                      className="btn btn-danger"
                    >
                      削除
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* TODO:ページネーションコンポーネントをここに追加 */}
        </div>
      </div>
    </HeaderLayout>
  );
}