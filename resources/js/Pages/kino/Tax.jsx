import React from 'react';
import HeaderLayout from '@/Layouts/Header.Layout';
// import Layout1 from '../../Layouts/Layout1';

const Tax = ({ kashi, kari, deduction1, kyuyo, deduction }) => {
  return (
    <HeaderLayout className="bg-primary text-bg-primary">
      <div className="container p-5">
        <h2>現在の課税所得を確認</h2>

        <div className="wrapper py-4">
          <h4 className="">事業所得</h4>
          <div className="box px-4">
            <label htmlFor="name">売上</label>
            <label htmlFor="name">{kashi?.sum || 0} ー</label>
            <label htmlFor="name">経費</label>
            <label htmlFor="name">{kari?.sum || 0} ＝</label>
            <label htmlFor="name">売上</label>
            <label htmlFor="name">{(kashi?.sum || 0) - (kari?.sum || 0)}</label>
            <label htmlFor="name">   ー  青色申告特別控除</label>
            <label htmlFor="name">{deduction1?.sum || 0}  ＝</label>
            <label htmlFor="name" className="fs-4 text-primary fw-bold">事業課税所得</label>
            <label htmlFor="name" className="fs-4">
              {Math.max((kashi?.sum || 0) - (kari?.sum || 0) - (deduction1?.sum || 0), 0)}
            </label>
          </div>
        </div>

        <div className="wrapper py-4">
          <h4>給与所得</h4>
          <div className="box px-4">
            <label htmlFor="name">給料</label>
            <label htmlFor="name">{kyuyo?.sum || 0} ー</label>
            <label htmlFor="name">  給料所得控除</label>
            <label htmlFor="name">650000  =</label>
            <label htmlFor="name" className="fs-4 text-success fw-bold">給与課税所得</label>
            <label htmlFor="name" className="fs-4">
              {Math.max((kyuyo?.sum || 0) - 650000, 0)}
            </label>
          </div>
        </div>

        <div className="wrapper py-4">
          <h4>合計課税所得の計算</h4>
          <div className="box px-4">
            <label htmlFor="name" className="text-primary fw-bold">事業課税所得</label>
            <label htmlFor="name" className="fs-4">
              {Math.max((kashi?.sum || 0) - (kari?.sum || 0) - (deduction1?.sum || 0), 0)}  ＋
            </label>
            <label htmlFor="name" className="text-success fw-bold">給与課税所得</label>
            <label htmlFor="name" className="fs-4">
              {Math.max((kyuyo?.sum || 0) - 650000, 0)}  ―
            </label>
            <label htmlFor="name">控除合計</label>
            <label htmlFor="name" className="fs-4">{deduction?.sum || 0} - 480000=</label>
            <label htmlFor="name" className="text-danger fw-bold">課税所得</label> 
            <label htmlFor="name" className="fw-bold fs-3">
              {/* 課税所得の計算ロジックをここに記述 */}
            </label>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Tax;
