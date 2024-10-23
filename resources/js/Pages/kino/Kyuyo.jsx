// import Layout from '../../Layouts/Layout1';
import React from 'react';
import { useForm } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
// import { Inertia } from '@inertiajs/inertia';

const Kyuyo = () => {
  const { data, setData, post, processing, errors } = useForm({
    user_id: '', // Auth::user()->id に相当する値を設定する必要があります
    day: '',
    name: '',
    price: '',
    remarks: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('kyuyo'));
  };

  return (
    <HeaderLayout>
      <div className="container p-5">
        <h2>給与所得入力</h2>

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="user_id" value={data.user_id} />
          
          <div className="box py-2">
            <label htmlFor="day">取引日時</label><span className="required">*</span>
            {errors.day && <dd className="text-danger">{errors.day}</dd>}
            <input 
              type="date" 
              name="day" 
              value={data.day} 
              onChange={e => setData('day', e.target.value)}
            />
          </div>

          <div className="box py-2">
            <label htmlFor="name">勤め先</label><span className="required">*</span>
            {errors.name && <dd className="text-danger">{errors.name}</dd>}
            <input 
              type="text" 
              name="name" 
              value={data.name} 
              onChange={e => setData('name', e.target.value)}
            />
          </div>

          <div className="box py-2">
            <label htmlFor="price">手取り金額</label><span className="required">*</span>
            {errors.price && <dd className="text-danger">{errors.price}</dd>}
            <input 
              type="number" 
              name="price" 
              placeholder="1000" 
              value={data.price} 
              onChange={e => setData('price', e.target.value)}
            />
          </div>

          <div className="box py-2">
            <label htmlFor="remarks">備考</label><span className="required">*</span>
            {errors.remarks && <dd className="text-danger">{errors.remarks}</dd>}
            <input 
              type="text" 
              name="remarks" 
              placeholder="○○株式会社" 
              value={data.remarks} 
              onChange={e => setData('remarks', e.target.value)}
            />
          </div>

          <button className="btn btn-primary my-2" disabled={processing}>登録</button>
        </form>

        {/* 登録済みの仕分けを表示 */}
        <div className="alldata py-4 my-4">
          <table className="table table-striped">
            {/* テーブルの内容 */}
          </table>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Kyuyo;
