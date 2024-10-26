import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
import FormSelect from '@/Components/FormSelect';
import FormInputField from '@/Components/FormInputField';

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

                    <button type="submit" className='btn btn-primary my-2' disabled={processing}>送信</button>
                    {/* <PrimaryButton className="ms-4" disabled={processing}>
                        送信
                    </PrimaryButton> */}
                </form>
                <div className="mt-8">
                    <h3>仕分け一覧</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>日付</th>
                                <th>借方名</th>
                                <th>借方金額</th>
                                <th>貸方名</th>
                                <th>貸方金額</th>
                                <th>備考</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortings.data.map((sorting, index) => (
                                <tr key={index}>
                                    <td>{sorting.date}</td>
                                    <td>{sorting.kari_name}</td>
                                    <td>{sorting.kari_price}</td>
                                    <td>{sorting.kashi_name}</td>
                                    <td>{sorting.kashi_price}</td>
                                    <td>{sorting.remarks}</td>

                                    <td><Link href={route('edit', { id: sorting.id })} className='btn btn-success my-2'>更新</Link></td>
                                    <td><Link
                                        href={route('delete', { id: sorting.id })}
                                        className='btn btn-danger my-2'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (window.confirm('本当に削除しますか？')) {
                                                window.location.href = route('delete', { id: sorting.id });
                                            }
                                        }}
                                    >
                                        削除
                                    </Link></td>
                                    {/* <td><Link type="submit" href={route('edit')} className='btn btn-primary my-2' disabled={processing}>更新</Link></td> */}
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