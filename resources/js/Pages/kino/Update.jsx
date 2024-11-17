import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
import FormSelect from '@/Components/FormSelect';
import FormInputField from '@/Components/FormInputField';
import FormInputMath from '@/Components/FormInputMath';

const Update = ({ sortings, kari_names }) => {
    const { data, setData, post, processing, errors } = useForm({
        id: sortings.id,
        user_id: sortings.user_id,
        day: sortings.date,
        kari_name_id: sortings.kari_name_id,
        kari_price: sortings.kari_price,
        kashi_name_id: sortings.kashi_name_id,
        kashi_price: sortings.kashi_price,
        remarks: sortings.remarks
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('update'));
    };

    const handleInputChange = (name, value) => {
        setData(name, value);
        // console.log('Name',name,'Value',value);
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
                                    {errors.kari_name_id && <dd className="text-danger">{errors.kari_name_id}</dd>}
                                </td>
                                <td>
                                    <FormSelect
                                        className='form-control form-control-sm'
                                        name="kari_name_id"
                                        value={data.kari_name_id}
                                        onChange={(e) => setData('kari_name_id', e.target.value)}
                                        options={kari_names.map(name => ({ value: name.id, label: name.name }))}
                                    />
                                </td>
                                <td>
                                    <label htmlFor="kashi_name">貸方名</label><span className="required text-danger">* </span>
                                    {errors.kashi_name && <dd className="text-danger">{errors.kashi_name}</dd>}
                                </td>
                                <td>
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
                                    {errors.kari_price && <dd className="text-danger">{errors.kari_price}</dd>}
                                </td>
                                <td>
                                    {/* <FormInputField
                                        type="number"
                                        name="kari_price"
                                        placeholder="1000"
                                        value={data.kari_price}
                                        onChange={(e) => setData('kari_price', e.target.value)}
                                    /> */}
                                    <FormInputMath
                                        name="kari_price"
                                        value={data.kari_price}
                                        onChange={handleInputChange}
                                    />
                                </td>
                                <td>
                                    <label htmlFor="kashi_price">貸方金額</label><span className="required text-danger">*</span>
                                    {errors.kashi_price && <dd className="text-danger">{errors.kashi_price}</dd>}
                                </td>
                                <td>
                                    {/* <FormInputField
                                        type="number"
                                        name="kashi_price"
                                        placeholder="1000"
                                        value={data.kashi_price}
                                        onChange={(e) => setData('kashi_price', e.target.value)}
                                    /> */}
                                    <FormInputMath
                                        name="kashi_price"
                                        value={data.kashi_price}
                                        onChange={handleInputChange}
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



                    <button type="submit" className="btn btn-success px-4" disabled={processing}>更新</button>
                    <button type="button" class="btn btn-dark px-4 mx-2" onClick={() => window.history.back()}>戻る</button>
                </form>
            </div>
        </HeaderLayout>
    );
};

export default Update;
