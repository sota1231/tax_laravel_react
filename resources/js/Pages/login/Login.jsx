import React from 'react';
import { useForm } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <HeaderLayout>
            <div className="container p-5">
                <h2>ログイン画面</h2>

                <form onSubmit={handleSubmit}>
                    <div className="box py-2">
                        {data.error && (
                            <p className="text-danger">メールアドレス、またはパスワード違います</p>
                        )}
                        <label htmlFor="email">ログインID</label><span className="required">*</span>
                        {errors.email && (
                            <dd className="text-danger">{errors.email}</dd>
                        )}
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="111@gmail"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>

                    <div className="box py-2">
                        <label htmlFor="password">パスワード</label><span className="required">*</span>
                        {errors.password && (
                            <dd className="text-danger">{errors.password}</dd>
                        )}
                        <input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            autoComplete="new-password"
                        />
                    </div>

                    <button className="btn btn-primary my-3" disabled={processing}>ログイン</button>
                </form>
                <a href={route('register')}>新規登録はこちら</a>
            </div>
        </HeaderLayout>
    );
};

export default Login;

