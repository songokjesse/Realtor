import Layout from "../../../components/layout";
import Link from "next/link";
import {useRouter} from "next/router";


export default function Add() {
    const router = useRouter();
    const handleSubmit = async (event) => {

        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            name: event.target.name.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/category/add'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        console.log(result)
        // alert(`Category ${result    .name} Added`)
        await router.push('/admin/category')
    }
    return <>
        <form onSubmit={handleSubmit}>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link href="/admin">
                        <a >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="w-4 h-4 mr-2 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Admin Home
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/category">
                        <a >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="w-4 h-4 mr-2 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Category
                        </a>
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="w-4 h-4 mr-2 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Add Category
                    </li>
                </ul>
            </div>
            <div className="card w-96 bg-base-100 min-w-full">
                {/*<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>*/}
                <div className="card-body">
                    <h2 className="card-title">Category</h2>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Category Name"
                        className="input input-bordered w-full"
                        required
                        minLength="5"
                    />
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"> + &nbsp; Add</button>
                    </div>
                </div>
            </div>
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