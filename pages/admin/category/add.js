import Layout from "../../../components/layout";

export default function Add({categories}) {
    return <>
        <form>
            <h1>Add Category</h1>
        </form>
    </>
}

Add.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}