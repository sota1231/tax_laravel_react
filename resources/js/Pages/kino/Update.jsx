import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
import FormSelect from '@/Components/FormSelect';

const Update = ({ sortings, kari_names }) => {
    const { data, setData, post, processing, errors } = useForm({
        id: sortings.id,
        user_id: sortings.user_id,
        day: sortings.date,
        kari_name: sortings.kari_name,
        kari_price: sortings.kari_price,
        kashi_name: sortings.kashi_name,
        kashi_price: sortings.kashi_price,
        remarks: sortings.remarks
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('update'));
    };

    return (
        <HeaderLayout className="bg-success text-bg-success">
            <div className="container p-5">
                <h2>帳簿編集画面</h2>
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="id" value={data.id} />
                    <input type="hidden" name="user_id" value={data.user_id} />

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
                                    <select
                                        name="kashi_name"
                                        value={data.kashi_name}
                                        onChange={(e) => setData('kashi_name', e.target.value)}
                                    >
                                        <option value={data.kashi_name}>{data.kashi_name}</option>
                                        {kari_names.map((name, index) => (
                                            <option key={index} value={name.name}>{name.name}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="kari_price">借方金額</label><span className="required text-danger">*</span>
                                    {errors.kari_price && <dd className="text-danger">{errors.kari_price}</dd>}
                                </td>
                                <td>
                                    <input
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
                                    <input
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
                                    <input
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



                    <button type="submit" className="btn btn-success my-2" disabled={processing}>更新</button>
                    <button type="button" class="btn btn-dark my-2" onClick={() => window.history.back()}>戻る</button>
                </form>
            </div>
        </HeaderLayout>
    );
};

export default Update;
