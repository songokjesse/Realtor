import {PrismaClient} from "@prisma/client";

export default  async function handler(req, res) {
    const prisma = new PrismaClient()

    // Get data submitted in request's body.
    const {name} = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('Category Name: ', name)

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!name) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'Category name not found' })
    }

    // Found the name.
    // Sends a HTTP success code

    try {
        const result = await prisma.category.create({
            data: {
                name: name,
            },
        });
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured while adding a new category." });
    }
    //
    //
    // const result = await prisma.category.create({
    //     data: {
    //         name: name,
    //     },
    // });
    //
    // res.status(200).json({ data: `${result} ` })
}