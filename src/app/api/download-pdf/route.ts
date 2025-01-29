import { NextResponse } from "next/server";
import { join } from "path";
import { promises as fs } from "fs";

export async function GET() {
    try {
        // Define the path to the PDF file
        const filePath = join(process.cwd(), 'public', 'doc.pdf');
        const fileBuffer = await fs.readFile(filePath);

        const response = new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                'Content-Disposition': 'attachment; filename=mahura-a-lewatle.pdf',
                'Content-Type': 'application/pdf',
            }
        })
        return response;

    } catch (error) {
        console.log(error)
       return new NextResponse('Unable to download file', { status: 500})
    }
}