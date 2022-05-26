const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const handleError = (err) => {
    throw new Error(err.message)
}

const verifyStatus = async (URLArrays) => {
    try {
        const arrayStatus = await Promise
            .all(URLArrays
                .map(async (url) => {
                    const res = await fetch(url)
                    return res.status
                }))
        return arrayStatus
    } catch (err) {
        handleError(err)
    }
}

const urlArrayGenerator = (links) => {
    return links.map(objectLink => Object.values(objectLink).join())
}

export const validatingURL = async (links) => {
    const link = urlArrayGenerator(links)
    const statusLinks = await verifyStatus(link)
    const results = links.map((object, index) => ({ ...object, STATUS_CODE: statusLinks[index] }))
    return results
}
