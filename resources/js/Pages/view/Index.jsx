import React, { useState, useEffect } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
import FormSelect from '@/Components/FormSelect';
import FormInputField from '@/Components/FormInputField';
import FlashMessage from '@/Components/FlashMessage';
import FormInputMath from '@/Components/FormInputMath';


const Index = ({ kari_names, sortings }) => {
    const { data, setData, post, processing, errors } = useForm({
        day: '',
        kari_name_id: '',
        kari_price: '',
        kashi_name_id: '',
        kashi_price: '',
        remarks: '',

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('sorting'));
    };

    const handleInputChange = (name, value) => {
        setData(name, value);
        // console.log('Name',name,'Value',value);
    };

    return (
        <HeaderLayout className="bg-primary text-bg-primary">

            <div className="container p-5">
                <FlashMessage />
                <h2>複式簿記</h2>
                <form onSubmit={handleSubmit}>

                    <table className="table">
                        <colgroup>
                            <col style={{ width: '15vw' }} />
                            <col style={{ width: '35vw' }} />
                            <col style={{ width: '15vw' }} />
                            <col style={{ width: '35vw' }} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="day">取引日時</label><span className="required text-danger">*</span>
                                </td>
                                <td>
                                    {errors.day && <dd className="text-danger">{errors.day}</dd>}
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
                                    <label htmlFor="kari_name_id">借方名</label><span className="required text-danger">* </span>
                                </td>
                                <td>
                                    {errors.kari_name_id && <dd className="text-danger">{errors.kari_name_id}</dd>}
                                    <FormSelect
                                        className='form-control form-control-sm'
                                        name="kari_name_id"
                                        value={data.kari_name_id}
                                        onChange={(e) => setData('kari_name_id', e.target.value)}
                                        // TODO
                                        options={kari_names.map(name => ({ value: name.id, label: name.name }))}
                                    />
                                </td>
                                <td>
                                    <label htmlFor="kashi_name">貸方名</label><span className="required text-danger">* </span>
                                </td>
                                <td>
                                    {errors.kashi_name_id && <dd className="text-danger">{errors.kashi_name_id}</dd>}
                                    <FormSelect
                                        className='form-control form-control-sm'
                                        name="kashi_name_id"
                                        value={data.kashi_name_id}
                                        onChange={(e) => setData('kashi_name_id', e.target.value)}
                                        options={kari_names.map(name => ({ value: name.id, label: name.name }))}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="kari_price">借方金額</label><span className="required text-danger">*</span>
                                </td>
                                <td>
                                    {/* <FormInputField
                                        type="number"
                                        name="kari_price"
                                        placeholder="1000"
                                        value={data.kari_price}
                                        onChange={(e) => setData('kari_price', e.target.value)}
                                    /> */}
                                    {errors.kari_price && <dd className="text-danger">{errors.kari_price}</dd>}
                                    <FormInputMath
                                        name="kari_price"
                                        onChange={handleInputChange}
                                    />
                                </td>
                                <td>
                                    <label htmlFor="kashi_price">貸方金額</label><span className="required text-danger">*</span>
                                </td>
                                <td>
                                    {/* <FormInputField
                                        type="number"
                                        name="kashi_price"
                                        placeholder="1000"
                                        value={data.kashi_price}
                                        onChange={(e) => setData('kashi_price', e.target.value)}
                                    /> */}
                                    {errors.kashi_price && <dd className="text-danger">{errors.kashi_price}</dd>}
                                    <FormInputMath
                                        name="kashi_price"
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="remarks">備考</label><span className="required text-danger">*</span>
                                </td>
                                <td>
                                    {errors.remarks && <dd className="text-danger">{errors.remarks}</dd>}
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
                        <colgroup>
                            {/* <col style={{ width: '2vw' }} /> */}
                            <col style={{ width: '10vw' }} />
                            <col style={{ width: '10vw' }} />
                            <col style={{ width: '10vw' }} />
                            <col style={{ width: '10vw' }} />
                            <col style={{ width: '10vw' }} />
                            <col style={{ width: '40vw' }} />
                            <col style={{ width: '5vw' }} />
                            <col style={{ width: '5vw' }} />
                        </colgroup>
                        <thead>
                            <tr>
                                {/* <th className='bg-success-subtle'>ID</th> */}
                                <th className='bg-secondary-subtle'>日付</th>
                                <th className='bg-success-subtle'>借方名</th>
                                <th className='bg-success-subtle'>借方金額</th>
                                <th className='bg-danger-subtle'>貸方名</th>
                                <th className='bg-danger-subtle'>貸方金額</th>
                                <th className='bg-secondary-subtle'>備考</th>
                                <th className='bg-secondary-subtle'></th>
                                <th className='bg-secondary-subtle'></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ display: 'none' }}></tr>
                            {sortings.data.map((sorting, index) => (
                                <tr key={index}>
                                    {/* <td>{index + 1}</td> */}
                                    <td>{sorting.date}</td>
                                    <td>{kari_names.find(name => name.id === sorting.kari_name_id)?.name}</td>
                                    <td>{sorting.kari_price}</td>
                                    <td>{kari_names.find(name => name.id === sorting.kashi_name_id)?.name}</td>
                                    <td>{sorting.kashi_price}</td>
                                    <td>{sorting.remarks.length > 20 ? `${sorting.remarks.slice(0, 20)}...` : sorting.remarks}</td>
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