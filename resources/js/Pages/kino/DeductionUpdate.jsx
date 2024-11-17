import React from 'react';
import { useForm } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
import FormSelect from '@/Components/FormSelect';
import FormInputField from '@/Components/FormInputField';
import FormInputMath from '@/Components/FormInputMath';


const DeductionUpdate = ({ deductions, errors }) => {
    const { data, setData, post, processing, user } = useForm({
        id: deductions.id,
        user_id: deductions.user_id,
        day: deductions.date,
        role: deductions.role,
        price: deductions.price,
        remarks: deductions.remarks
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('deduction_update'));
    };

    const handleInputChange = (name, value) => {
        setData(name, value);
        // console.log('Name',name,'Value',value);
    };

    return (
        <HeaderLayout className="bg-success text-bg-success">
            <div className="container p-5">
                <h2>控除編集画面</h2>
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
                                    <label htmlFor="remarks">控除名</label><span className="required text-danger">*</span>
                                    {errors.remarks && <dd className="text-danger">{errors.remarks}</dd>}
                                </td>
                                <td>
                                    <FormInputField
                                        type="text"
                                        name="remarks"
                                        placeholder="1月分国民健康保険"
                                        value={data.remarks}
                                        onChange={(e) => setData('remarks', e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="role">控除種類</label><span className="required text-danger">*</span>
                                </td>
                                <td>
                                    <FormSelect
                                        className='form-control form-control-sm'
                                        name="role"
                                        value={data.role}
                                        onChange={(e) => setData('role', e.target.value)}
                                        options={user?.role !== 2 ? [
                                            { value: "0", label: "通常の控除（社会保険料控除や扶養控除）" }
                                        ] : [
                                            { value: "0", label: "通常の控除（社会保険料控除や扶養控除）" },
                                            { value: "1", label: "事業所得控除（青色申告してる方）" }
                                        ]}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="price">金額</label><span className="required text-danger">*</span>
                                    {errors.price && <dd className="text-danger">{errors.price}</dd>}
                                </td>
                                <td>
                                    {/* <FormInputField
                                        type="number"
                                        name="price"
                                        placeholder="1000"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                    /> */}
                                    <FormInputMath
                                        value={data.price}
                                        name="price"
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <button className="btn btn-success px-4" type="submit" disabled={processing}>編集</button>
                    <button className="btn btn-dark px-4 mx-2" type="button" onClick={() => window.history.back()}>戻る</button>
                </form>
            </div>
        </HeaderLayout>
    );
};

export default DeductionUpdate;