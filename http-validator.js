const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const urlArrayGenerator = (links) => {
    return links.map(objectLink => Object.values(objectLink).join())
}

export const validatingURL = (links) => {
    return urlArrayGenerator(links)
}
