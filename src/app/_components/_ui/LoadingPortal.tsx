'use client'

import ReactDOM from 'react-dom'

export default function LoadingPortal() {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate50 bg-opacity-60"></div>,
        document.body
    )
}
