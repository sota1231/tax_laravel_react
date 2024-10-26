// import Layout from '../../Layouts/Layout1';
import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import HeaderLayout from '@/Layouts/Header.Layout';
// import { Inertia } from '@inertiajs/inertia';

const Kyuyo = ({ kyuyos }) => {
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
    <HeaderLayout className="bg-primary text-bg-primary">
      <div className="container p-5">
        <h2>給与所得入力</h2>

        <form onSubmit={handleSubmit}>
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
                  <label htmlFor="name">勤め先</label><span className="required text-danger">*</span>
                  {errors.name && <dd className="text-danger">{errors.name}</dd>}
                </td>
                <td>
                  <input
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
                  <input
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
                  <input
                    type="text"
                    name="remarks"
                    placeholder="○○株式会社"
                    value={data.remarks}
                    onChange={(e) => setData('remarks', e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className='btn btn-primary my-2' disabled={processing}>送信</button>
        </form>

        <h3 className="mt-4">給与一覧</h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>取引日時</th>
                <th>勤め先</th>
                <th>手取り金額</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              {kyuyos.data.map((kyuyo, index) => (
                <tr key={index}>
                  <td>{kyuyo.date}</td>
                  <td>{kyuyo.name}</td>
                  <td>{kyuyo.price}円</td>
                  <td>{kyuyo.remarks}</td>
                  <td><Link href={route('kyuyo_edit', { id: kyuyo.id })} className='btn btn-success my-2'>更新</Link></td>
                  <td><Link
                    href={route('kyuyo_delete', { id: kyuyo.id })}
                    className='btn btn-danger my-2'
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.confirm('本当に削除しますか？')) {
                        window.location.href = route('kyuyo_delete', { id: kyuyo.id });
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
      </div>
    </HeaderLayout>
  );
};

export default Kyuyo;
