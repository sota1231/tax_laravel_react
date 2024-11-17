import React, { useState, useEffect } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
import FormSelect from '@/Components/FormSelect';
import FormInputField from '@/Components/FormInputField';
import FlashMessage from '@/Components/FlashMessage';
import FormInputMath from '@/Components/FormInputMath';


const SimpleUpdate = ({ kari_names, sortings }) => {
    // フィルタリングが適用されたかを追跡する状態
    const [isFiltered, setIsFiltered] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        id: sortings.id,
        user_id: sortings.user_id,
        day: sortings.date,
        balance: sortings.balance,
        name_id: sortings.kari_name_id,
        price: sortings.kari_price,
        remarks: sortings.remarks,
    });


    // 収入・支出で分類を分けるための関数
    const getFilteredNames = () => {
        // balanceが変更された時のみフィルタリングを適用
        // 初期表示時（isFiltered = false）は全ての分類を返す
        if (!isFiltered) {
            return kari_names;
        }
        // data.balanceが0（収入）の時はleft=1のデータ
        // data.balanceが1（支出）の時はleft=0のデータ
        // return kari_names.filter(name =>
        //     name.left === (data.balance === 0 ? 1 : 0)
        // );
        const filteredResults = kari_names.filter(name => {
            const shouldInclude = name.left === (data.balance === 0 ? 1 : 0);
            console.log(`name: ${name.name}, left: ${name.left}, include: ${shouldInclude}`);
            return shouldInclude;
        });

        console.log('Filtered results:', filteredResults);
        return filteredResults;
    };

    // balanceが変更された時にname_idをリセット
    const handleBalanceChange = (value) => {
        setIsFiltered(true); // フィルタリングフラグを立てる
        setData(data => ({
            ...data,           // 1. 既存のデータを展開
            balance: value,    // 2. balanceを更新
            name_id: ''        // 3. name_idをリセット
        }));
    };

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
                <FlashMessage />
                <h2>簡易簿記</h2>
                <form onSubmit={handleSubmit}>

                    <div className="btn-group mb-3 center" role="group">
                        <button
                            type="button"
                            className={`text-bold btn ${data.balance === 0 ? 'btn-warning' : 'btn-outline-warning'}`}
                            onClick={() => handleBalanceChange(0)}
                        >
                            収入
                        </button>
                        <button
                            type="button"
                            className={`btn ${data.balance === 1 ? 'btn-warning' : 'btn-outline-warning'}`}
                            // onClick={() => setData(1)}
                            onClick={() => handleBalanceChange(1)}

                        >
                            支出
                        </button>

                    </div>
                    {/* <span className="text-danger">　　← 最初に選択してください</span> */}
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
                                        // options={kari_names.map(name => ({ value: name.id, label: name.name }))}
                                        options={getFilteredNames().map(name => ({ value: name.id, label: name.name }))}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="kari_price">金額</label><span className="required text-danger">*</span>
                                    {errors.price && <dd className="text-danger">{errors.price}</dd>}
                                </td>
                                <td>
                                    {/* <FormInputField
                                        type="number"
                                        name="price"
                                        placeholder="1000"
                                        // value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                    /> */}
                                    <FormInputMath
                                        name="price"
                                        value={data.price}
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



                    <div className="">
                        <div className="">

                        </div>
                    </div>

                    <button type="submit" className='btn btn-primary px-4' disabled={processing}>送信</button>
                    {/* <PrimaryButton className="ms-4" disabled={processing}>
                        送信
                    </PrimaryButton> */}
                </form>

            </div >

        </HeaderLayout >
    );
};

export default SimpleUpdate;