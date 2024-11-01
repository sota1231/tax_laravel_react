import React, { useState, useEffect } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
import FormSelect from '@/Components/FormSelect';
import FormInputField from '@/Components/FormInputField';
import FlashMessage from '@/Components/FlashMessage';


const Index = ({ kari_names, sortings }) => {
    const { data, setData, post, processing, errors } = useForm({
        day: '',
        kari_name: '',
        kari_price: '',
        kashi_name: '',
        kashi_price: '',
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
                <h2>複式簿記</h2>
                <form onSubmit={handleSubmit}>

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
                                    <label htmlFor="kari_name">借方名</label><span className="required text-danger">* </span>
                                    {errors.kari_name && <dd className="text-danger">{errors.kari_name}</dd>}
                                </td>
                                <td>
                                    <FormSelect
                                        name="kari_name"
                                        value={data.kari_name}
                                        onChange={(e) => setData('kari_name', e.target.value)}
                                        options={kari_names.map(name => ({ value: name.name, label: name.name }))}
                                    />
                                </td>
                                <td>
                                    <label htmlFor="kashi_name">貸方名</label><span className="required text-danger">* </span>
                                    {errors.kashi_name && <dd className="text-danger">{errors.kashi_name}</dd>}
                                </td>
                                <td>
                                    <FormSelect
                                        name="kashi_name"
                                        value={data.kashi_name}
                                        onChange={(e) => setData('kashi_name', e.target.value)}
                                        options={kari_names.map(name => ({ value: name.name, label: name.name }))}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="kari_price">借方金額</label><span className="required text-danger">*</span>
                                    {errors.kari_price && <dd className="text-danger">{errors.kari_price}</dd>}
                                </td>
                                <td>
                                    <FormInputField
                                        type="number"
                                        name="kari_price"
                                        placeholder="1000"
                                        value={data.kari_price}
                                        onChange={(e) => setData('kari_price', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <label htmlFor="kashi_price">貸方金額</label><span className="required text-danger">*</span>
                                    {errors.kashi_price && <dd className="text-danger">{errors.kashi_price}</dd>}
                                </td>
                                <td>
                                    <FormInputField
                                        type="number"
                                        name="kashi_price"
                                        placeholder="1000"
                                        value={data.kashi_price}
                                        onChange={(e) => setData('kashi_price', e.target.value)}
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
                                        value={data.remarks}
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
                                <th className='bg-success-subtle'>借方名</th>
                                <th className='bg-success-subtle'>借方金額</th>
                                <th className='bg-danger-subtle'>貸方名</th>
                                <th className='bg-danger-subtle'>貸方金額</th>
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
                                    <td>{sorting.kari_name.length > 10 ? `${sorting.kari_name.slice(0, 10)}...` : sorting.kari_name}</td>
                                    <td>{sorting.kari_price}</td>
                                    <td>{sorting.kashi_name.length > 10 ? `${sorting.kashi_name.slice(0, 10)}...` : sorting.kashi_name}</td>
                                    <td>{sorting.kashi_price}</td>
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

export default Index;