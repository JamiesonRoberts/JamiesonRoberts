'use client'

import { usePlausible } from 'next-plausible'

export default function TrackableLink({ children, eventName, ...rest }) {
    const plausible = usePlausible()

    return (
        <a
            {...rest}
            onClick={() => {
                plausible(eventName)
            }}
        >
            {children}
        </a>
    )
}
