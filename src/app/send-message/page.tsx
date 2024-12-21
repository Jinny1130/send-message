'use client'

import NumberButtonBox from '@/components/send-message/NumberButtonBox'

export default function SendMessageMain() {
    return (
        <>
            <title>Send SMS ✉️ | WOOJINNY</title>

            <div className="fixed inset-x-0 inset-y-0 size-full [background:var(--BL-600,#1A7CFD)]">
                <div className="size-full sm:p-[72px] flex flex-col justify-end items-center self-stretch">
                    <NumberButtonBox className=""></NumberButtonBox>
                </div>
            </div>
        </>
    );
}