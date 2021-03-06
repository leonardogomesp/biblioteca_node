import chalk from 'chalk'
import fs from 'fs'

const errorTreatment = (err) => {
    throw new Error(chalk.red(err.code, ": the file doesn't exist in the informed path"))
}

const linkExtractor = (text) => {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultados = []
    let temp
    while ((temp = regex.exec(text)) !== null) {
        arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? chalk.red('Não há links no texto que foi informado!') : arrayResultados
}

export default async function findFile(filePath) {
    try {
        const encoding = 'utf-8'
        const text = await fs.promises.readFile(filePath, encoding)
        return linkExtractor(text)
    } catch (error) {
        errorTreatment(error)
    }
}
