import Layout from "../../../components/layout";

export default function Index() {
    return <div>Images Home</div>
}

Index.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}