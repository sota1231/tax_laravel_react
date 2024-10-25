import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
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
        <HeaderLayout>
            <div className="container p-5">
                <h2>控除登録画面</h2>

                <form onSubmit={handleSubmit}>
                    <div className="box py-2">
                        <label htmlFor="day">取引日時</label><span className="required text-danger">*</span>
                        {errors.day && <dd className="text-danger">{errors.day}</dd>}
                        <input
                            type="date"
                            name="day"
                            value={data.day}
                            onChange={e => setData('day', e.target.value)}
                        />
                    </div>

                    <div className="box py-2">
                        <label htmlFor="name">控除名</label><span className="required text-danger">*</span>
                        {errors.name && <dd className="text-danger">{errors.name}</dd>}
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                    </div>

                    <div className="box py-3">
                        <label htmlFor="role">控除種類</label><span className="required text-danger">*</span>
                        <select
                            name="role"
                            value={data.role}
                            onChange={e => setData('role', e.target.value)}
                        >
                            <option value="0">通常の控除（社会保険料控除や扶養控除）</option>
                            <option value="1">事業所得控除（青色申告してる方）</option>
                        </select>
                    </div>

                    <div className="box py-0">
                        <label htmlFor="price">金額</label><span className="required text-danger">*</span>
                        {errors.price && <dd className="text-danger">{errors.price}</dd>}
                        <input
                            type="number"
                            name="price"
                            placeholder="1000"
                            value={data.price}
                            onChange={e => setData('price', e.target.value)}
                        />
                    </div>

                    <div className="box py-3">
                        <label htmlFor="remarks">備考</label><span className="required text-danger">*</span>
                        {errors.remarks && <dd className="text-danger">{errors.remarks}</dd>}
                        <input
                            type="text"
                            name="remarks"
                            placeholder="○○株式会社"
                            value={data.remarks}
                            onChange={e => setData('remarks', e.target.value)}
                        />
                    </div>

                    <button type="submit" disabled={processing}>送信</button>
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
                                <td>{deduction.day}</td>
                                <td>{deduction.name}</td>
                                <td>{deduction.role === 0 ? '通常の控除' : '事業所得控除'}</td>
                                <td>{deduction.price}</td>
                                <td>{deduction.remarks}</td>
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
