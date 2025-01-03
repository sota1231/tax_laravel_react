import React, { useState, useEffect } from 'react';
// import '@/../css/app.css';

const FormInputMath = ({ onChange, name, value }) => {
    const [inputValue, setInputValue] = useState(value || '');
    const [showButtons, setShowButtons] = useState(false);

    // ボタン押下で数値を追加する関数
    const handleButtonClick = (e, number) => {
        // e.preventDefault(); // フォーム送信を防ぐ
        const newValue = inputValue +  String(number); //文字列に変換しないと加算される
        setInputValue(newValue);
        if (onChange) {
            onChange(name, newValue); // 外部コンポーネントに入力値を通知
        }
    };

    // valueの監視、更新
    useEffect(() => {
        setInputValue( String(value || ''));
    }, [value]);

    // inputが押下されたときにボタン表示を切り替える関数
    const handleInputClick = () => {
        setShowButtons(true);
    };

    // 数字ボタン以外をクリックしたら非表示にする
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.button') && !e.target.closest('input')) {
                setShowButtons(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // キーボード入力を処理する関数を追加
    const handleInputChange = (e) => {
        const value = e.target.value;
        // 数字のみを許可する正規表現
        if (/^\d*$/.test(value)) {
            setInputValue(value);
            if (onChange) {
                onChange(name, value);
            }
        }
    };

    // バックスペース機能を追加
    const handleBackspace = (e) => {
        e.preventDefault();
        const newValue = inputValue.slice(0, -1);
        setInputValue(newValue);
        if (onChange) {
            onChange(name, newValue);
        }
    };

    return (
        <div>
            <input
                name={name}
                className='form-control form-control-sm'
                type="text"
                value={inputValue}
                onClick={handleInputClick}
                onChange={handleInputChange}  
                // readOnly
            />
            {showButtons && (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {[...Array(10)].map((_, index) => (
                        <button
                            type="button"
                            className='button'
                            key={index}
                            onClick={(e) => handleButtonClick(e, index)}
                            // style={{  }}
                        >
                            {index}
                        </button>
                    ))}
                    <button
                        type="button"
                        className='button'
                        onClick={handleBackspace}
                    >
                        ←
                    </button>
                </div>
            )}
        </div>
    );
};

export default FormInputMath;
