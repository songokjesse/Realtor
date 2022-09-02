import Layout from "../../../components/layout";

export default function Index() {
    return <div>Location Home</div>
}

Index.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}