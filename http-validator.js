const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const verifyStatus = async (URLArrays) => {
    const arrayStatus = await Promise.all(URLArrays.map(async (url) => {
        const res = await fetch(url)
        return res.status
    }))
    return arrayStatus
}

const urlArrayGenerator = (links) => {
    return links.map(objectLink => Object.values(objectLink).join())
}

export const validatingURL = async (links) => {
    const link = urlArrayGenerator(links)
    const statusLinks = await verifyStatus(link)
    return statusLinks
}
