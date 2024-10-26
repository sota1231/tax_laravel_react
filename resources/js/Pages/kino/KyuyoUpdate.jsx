import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
import FormInputField from '@/Components/FormInputField';

const KyuyoUpdate = ({ kyuyos }) => {
    const { data, setData, post, processing, errors } = useForm({
        id: kyuyos.id,
        user_id: kyuyos.user_id,
        day: kyuyos.date,
        name: kyuyos.name,
        price: kyuyos.price,
        remarks: kyuyos.remarks
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('kyuyo_update'));
    };

    return (
        <HeaderLayout className="bg-success text-bg-success">
            <div className="container p-5">
                <h2>給与所得編集画面</h2>

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
                                    <label htmlFor="name">勤め先</label><span className="required text-danger">*</span>
                                    {errors.name && <dd className="text-danger">{errors.name}</dd>}
                                </td>
                                <td>
                                    <FormInputField
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="price">手取り金額</label><span className="required text-danger">*</span>
                                    {errors.price && <dd className="text-danger">{errors.price}</dd>}
                                </td>
                                <td>
                                    <FormInputField
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
                                    <FormInputField
                                        type="text"
                                        name="remarks"
                                        value={data.remarks}
                                        onChange={(e) => setData('remarks', e.target.value)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <button type="submit" className="btn btn-success my-2 px-4" disabled={processing}>更新</button>
                    <button className="btn btn-dark my-2 px-4 mx-2" onClick={() => window.history.back()}>戻る</button>
                </form>
            </div>
        </HeaderLayout>
    );
};

export default KyuyoUpdate;