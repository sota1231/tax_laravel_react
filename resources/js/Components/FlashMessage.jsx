import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';

export default function FlashMessage() {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (flash.message) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [flash.message]);

    if (!visible) return null;

    const getAlertClass = () => {
        if (flash.success) return 'alert-success';
        if (flash.error) return 'alert-danger';
        if (flash.warning) return 'alert-warning';
        return 'alert-info';
    };

    return (
        <div className={`alert ${getAlertClass()} alert-dismissible fade show`} role="alert">
            {flash.message}
            <button type="button" className="btn-close" onClick={() => setVisible(false)} aria-label="閉じる"></button>
        </div>
    );
}