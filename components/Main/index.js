export default function Main ({ children, ...rest }) {
    return (
        <main {...rest}
              className={rest.className}
              role={'main'}
        >
            <div className={'wrapper'}>
                {children}
            </div>
        </main>
    )
}
