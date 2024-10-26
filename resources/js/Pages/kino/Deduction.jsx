import React, { useState } from 'react';
import { useForm, Link } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
// import { Inertia } from '@inertiajs/inertia';

const Deduction = ({ deductions }) => {
    const { data, setData, post, processing, errors } = useForm({
        user_id: '', // ユーザーIDを適切に設定する必要があります
        day: '',
        name: '',
        role: '',
        price: '',
        remarks: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('deduction'));
    };

    return (
        <HeaderLayout className="bg-primary text-bg-primary">
            <div className="container p-5">
                <h2>控除登録画面</h2>

                <form onSubmit={handleSubmit}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="day">取引日時</label><span className="required text-danger">*</span>
                                    {errors.day && <dd className="text-danger">{errors.day}</dd>}
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        name="day"
                                        id="day"
                                        value={data.day}
                                        onChange={(e) => setData('day', e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="name">控除名</label><span className="required text-danger">*</span>
                                    {errors.name && <dd className="text-danger">{errors.name}</dd>}
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="role">控除種類</label><span className="required text-danger">*</span>
                                </td>
                                <td>
                                    <select
                                        name="role"
                                        value={data.role}
                                        onChange={(e) => setData('role', e.target.value)}
                                    >
                                        <option value="0">通常の控除（社会保険料控除や扶養控除）</option>
                                        <option value="1">事業所得控除（青色申告してる方）</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="price">金額</label><span className="required text-danger">*</span>
                                    {errors.price && <dd className="text-danger">{errors.price}</dd>}
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="1000"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="remarks">備考</label><span className="required text-danger">*</span>
                                    {errors.remarks && <dd className="text-danger">{errors.remarks}</dd>}
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="remarks"
                                        placeholder="備考を入力"
                                        value={data.remarks}
                                        onChange={(e) => setData('remarks', e.target.value)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" className='btn btn-primary my-2' disabled={processing}>送信</button>
                </form>
                <div className="mt-8">
                    <h3>控除一覧</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>日付</th>
                                <th>控除名</th>
                                <th>控除種類</th>
                                <th>金額</th>
                                <th>備考</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deductions.data.map((deduction, index) => (
                                <tr key={index}>
                                    <td>{deduction.date}</td>
                                    <td>{deduction.name}</td>
                                    <td>{deduction.role === 0 ? '通常の控除' : '事業所得控除'}</td>
                                    <td>{deduction.price}</td>
                                    <td>{deduction.remarks}</td>
                                    <td><Link href={route('deduction_edit', { id: deduction.id })} className='btn btn-success my-2'>更新</Link></td>
                                    <td>
                                        <Link
                                            href={route('deduction_delete', { id: deduction.id })}
                                            className='btn btn-danger my-2'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (window.confirm('本当に削除しますか？')) {
                                                    window.location.href = route('deduction_delete', { id: deduction.id });
                                                }
                                            }}
                                        >
                                            削除
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </HeaderLayout>
    );
};

export default Deduction;
