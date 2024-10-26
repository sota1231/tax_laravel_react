import React from 'react';
import HeaderLayout from '@/Layouts/Header.Layout';
// import Layout1 from '../../Layouts/Layout1';

const Tax = ({ kashi, kari, deduction1, kyuyo, deduction }) => {
  return (
    <HeaderLayout className="bg-primary text-bg-primary">
      <div className="container px-5">
        <div className="wrapper my-5">
          <h4>合計課税所得の計算</h4>
          <div className="box px-4">
            <table className="calculation-table">
              <tbody>
                <tr>
                  <td className="label fs-4 text-primary fw-bold">事業課税所得：</td>
                  <td className="value text-end fs-4">{Math.max((kashi?.sum || 0) - (kari?.sum || 0) - (deduction1?.sum || 0), 0)}</td>
                </tr>
                <tr>
                  <td className="label fs-4 text-success fw-bold">給与課税所得：</td>
                  <td className="value text-end fs-4">{Math.max((kyuyo?.sum || 0) - 650000, 0)}</td>
                </tr>
                <tr>
                  <td className="label fs-4">控除合計：</td>
                  <td className="value text-end fs-4">-{(deduction?.sum || 0) + 480000}</td>
                </tr>
                <tr className="final-result border-top">
                  <td className="label fs-4 text-danger fw-bold">課税所得：</td>
                  <td className="value text-end fw-bold fs-3">
                    {Math.max(
                      Math.max((kashi?.sum || 0) - (kari?.sum || 0) - (deduction1?.sum || 0), 0) +
                      Math.max((kyuyo?.sum || 0) - 650000, 0) -
                      ((deduction?.sum || 0) + 480000),
                      0
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="fs-4 fw-bold pt-">詳細</div>
        <div className="row py-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">事業所得</h6>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <span className="fw-bold">売上：</span> {kashi?.sum || 0}<br/>
                  <span className="fw-bold">経費：</span> -{kari?.sum || 0}<br/>
                  <span className="fw-bold">青色申告特別控除：</span> -{deduction1?.sum || 0}<br/>
                  <span className="fw-bold text-primary">合計：</span> {Math.max((kashi?.sum || 0) - (kari?.sum || 0) - (deduction1?.sum || 0), 0)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">給与所得</h6>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <span className="fw-bold">給料：</span> {kyuyo?.sum || 0}<br/>
                  <span className="fw-bold">給料所得控除：</span> -650000<br/>
                  <span className="fw-bold text-success">合計：</span> {Math.max((kyuyo?.sum || 0) - 650000, 0)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h6 className="mb-0">控除合計</h6>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <span className="fw-bold">控除額：</span> {deduction?.sum || 0}<br/>
                  <span className="fw-bold">基礎控除：</span> 480000<br/>
                  <span className="fw-bold text-danger">合計：</span> {(deduction?.sum || 0) + 480000}
                </p>
              </div>
            </div>
          </div>
        </div>
        

        
      </div>
    </HeaderLayout>
  );
};

export default Tax;
