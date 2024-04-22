import { handlers } from "@/auth"
export const { GET, POST } = handlers

export async function generateStaticParams() {
    // Since this is an API route and doesn't require pre-rendering, return an empty array.
    return [];
}