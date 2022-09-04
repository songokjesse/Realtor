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