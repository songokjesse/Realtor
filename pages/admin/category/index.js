import Layout from "../../../components/layout";
// import {PrismaClient} from "@prisma/client/scripts/default-index";
import { PrismaClient } from '@prisma/client'
import Link from "next/link";

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const categories = await prisma.category.findMany({
        select: {
            name: true,
        },
        }
    )

    return {
        props : { categories }
    }
}
export default function Index({categories}) {
    return <>
       <h1>Property Category </h1>
       <br/>
       <br/>
        <div className="text-sm breadcrumbs">
            <ul>
                <li>
                    <a href="/admin">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="w-4 h-4 mr-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                        </svg>
                        Admin Home
                    </a>
                </li>
                <li>
                    <a href="/admin/category">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="w-4 h-4 mr-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                        </svg>
                        Category
                    </a>
                </li>
            </ul>
        </div>
       <br/>
        <div className="flex items-end">
            <Link href="/admin/category/add" >
                <button className="btn btn-primary btn-sm mb-2 ">Add</button>
            </Link>

        </div>
        <hr/>
       <br/>


        <table className="flex table table-compact table-zebra min-w-full  items-center">
            <thead>
            <tr>
                <th>Name</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {categories.map(category => (
                <tr key={category.id} className='hover'>
                    <td>{category.name}</td>
                    <td className='flex items-end'>
                        <button className='btn btn-sm btn-primary'>Show</button> &nbsp;
                        <button className='btn btn-sm btn-secondary'>Edit</button> &nbsp;
                        <button className='btn btn-sm btn-accent'>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
}

Index.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}