import React, { useState, useEffect } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
import FormSelect from '@/Components/FormSelect';
import FormInputField from '@/Components/FormInputField';
import FlashMessage from '@/Components/FlashMessage';


const SimpleIndex = ({ kari_names, sortings }) => {
    const { data, setData, post, processing, errors } = useForm({
        day: '',
        balance:'',
        name: '',
        price: '',
        remarks: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('sorting'));
    };

    return (
        <HeaderLayout className="bg-primary text-bg-primary">

            <div className="container p-5">
                <FlashMessage />
                <h2>簡易簿記</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="btn-group mb-3" role="group">
                        <button 
                            type="button" 
                            className={`text-bold btn ${data.balance === 0 ? 'btn-warning' : 'btn-outline-warning'}`}
                            onClick={() => setData('balance', 0)}
                        >
                            収入
                        </button>
                        <button 
                            type="button" 
                            className={`btn ${data.balance === 1 ? 'btn-warning' : 'btn-outline-warning'}`}
                            onClick={() => setData('balance', 1)}
                        >
                            支出
                        </button>
                    </div>
                    {errors.balance && <div className="text-danger mb-3">{errors.balance}</div>}

                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="day">取引日時</label><span className="required text-danger">*</span>
                                    {errors.day && <dd className="text-danger">{errors.day}</dd>}
                                </td>
                                <td>
                                    <FormInputField
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
                                    <label htmlFor="kari_name">分類</label><span className="required text-danger">* </span>
                                    {errors.name_id && <dd className="text-danger">{errors.name_id}</dd>}
                                </td>
                                <td>
                                    <FormSelect
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                        name="name_id"
                                        value={data.name_id}
                                        onChange={(e) => setData('name_id', e.target.value)}
                                        options={kari_names.map(name => ({ value: name.id, label: name.name }))}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="kari_price">金額</label><span className="required text-danger">*</span>
                                    {errors.price && <dd className="text-danger">{errors.price}</dd>}
                                </td>
                                <td>
                                    <FormInputField
                                        type="number"
                                        name="price"
                                        placeholder="1000"
                                        // value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="remarks">備考</label><span className="required text-danger">*</span>
                                    {errors.remarks && <dd className="text-danger">{errors.remarks}</dd>}
                                </td>
                                <td>
                                    <FormInputField
                                        type="text"
                                        name="remarks"
                                        placeholder="〇月家賃"
                                        // value={data.remarks}
                                        onChange={(e) => setData('remarks', e.target.value)}
                                    />
                                </td>
                            </tr>

                        </tbody>
                    </table>



                    <div className="">
                        <div className="">

                        </div>
                    </div>

                    <button type="submit" className='btn btn-primary px-4' disabled={processing}>送信</button>
                    {/* <PrimaryButton className="ms-4" disabled={processing}>
                        送信
                    </PrimaryButton> */}
                </form>
                <div className="mt-8">
                    <h3>仕分け一覧</h3>
                    <div className="pagination py-2">
                        {sortings.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                className={`btn btn-sm ${link.active ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                preserveState
                                preserveScroll
                            />
                        ))}
                    </div>
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th className='bg-success-subtle'>ID</th>
                                <th className='bg-success-subtle'>日付</th>
                                <th className='bg-success-subtle'>項目名</th>
                                <th className='bg-success-subtle'>金額</th>
                                <th className='bg-danger-subtle'>備考</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortings.data.map((sorting, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{sorting.date}</td>
                                    <td>{kari_names.find(name => name.id === sorting.kari_name_id)?.name}</td>
                                    <td>{sorting.balance === 0 ? '+' : '-'}{sorting.kari_price}</td>
                                    <td>{sorting.remarks.length > 10 ? `${sorting.remarks.slice(0, 10)}...` : sorting.remarks}</td>
                                    <td><Link href={route('edit', { id: sorting.id })} className='btn btn-success btn-sm'>更新</Link></td>
                                    <td><Link
                                        href={route('delete', { id: sorting.id })}
                                        className='btn btn-danger btn-sm'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (window.confirm('本当に削除しますか？')) {
                                                window.location.href = route('delete', { id: sorting.id });
                                            }
                                        }}
                                    >
                                        削除
                                    </Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >

        </HeaderLayout >
    );
};

export default SimpleIndex;