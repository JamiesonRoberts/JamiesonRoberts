export default function Main({ children, ...rest }) {
    return (
        <main {...rest} className={rest.className} role={'main'}>
            <h2>Professional Experience</h2>
            <h3>Current</h3>
            <h3>Past</h3>

            <h2>Community Involvement</h2>
            <h3>Current</h3>
            <h3>Past</h3>
        </main>
    )
}
