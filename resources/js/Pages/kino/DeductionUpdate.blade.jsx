import React from 'react';
import { useForm } from '@inertiajs/react';
import Layout3 from '@/Layouts/Layout3';

const DeductionUpdate = ({ deductions, errors }) => {
    const { data, setData, post, processing } = useForm({
        id: deductions.id,
        user_id: deductions.user_id,
        day: deductions.date,
        name: deductions.name,
        role: deductions.role,
        price: deductions.price,
        remarks: deductions.remarks
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('deduction_update'));
    };

    return (
        <Layout3>
            <div className="container p-5">
                <h2>控除編集画面</h2>

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="id" value={data.id} />
                    <input type="hidden" name="user_id" value={data.user_id} />
                    
                    <div className="box py-2">
                        <label htmlFor="day">取引日時</label><span className="required text-danger">*</span>
                        {errors.day && <dd className="error text-danger">{errors.day}</dd>}
                        <input
                            type="date"
                            name="day"
                            value={data.day}
                            onChange={(e) => setData('day', e.target.value)}
                        />
                    </div>

                    <div className="box py-2">
                        <label htmlFor="name">控除名</label><span className="text-danger required">*</span>
                        {errors.name && <dd className="error text-danger">{errors.name}</dd>}
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </div>

                    <div className="box py-3">
                        <label htmlFor="role">控除種類</label><span className="required text-danger">*</span>
                        <select
                            name="role"
                            value={data.role}
                            onChange={(e) => setData('role', e.target.value)}
                        >
                            <option value="0">通常の控除（社会保険料控除や扶養控除）</option>
                            <option value="1">事業所得控除（青色申告してる方）</option>
                        </select>
                    </div>

                    <div className="box py-2">
                        <label htmlFor="price">金額</label><span className="text-danger required">*</span>
                        {errors.price && <dd className="error text-danger">{errors.price}</dd>}
                        <input
                            type="number"
                            name="price"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                        />
                    </div>

                    <div className="box py-2">
                        <label htmlFor="remarks">備考</label><span className="required text-danger">*</span>
                        {errors.remarks && <dd className="error text-danger">{errors.remarks}</dd>}
                        <input
                            type="text"
                            name="remarks"
                            value={data.remarks}
                            onChange={(e) => setData('remarks', e.target.value)}
                        />
                    </div>
                    
                    <button className="btn btn-success my-2" type="submit" disabled={processing}>編集</button>
                    <button className="btn btn-dark" type="button" onClick={() => window.history.back()}>戻る</button>
                </form>    
            </div>
        </Layout3>
    );
};

export default DeductionUpdate;