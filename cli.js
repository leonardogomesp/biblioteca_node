import findFile from './index.js'
import chalk from 'chalk'
import { validatingURL } from './http-validator.js'

const path = process.argv

const processedText = async (filePath) => {
    const result = await findFile(filePath[2])
    if (path[3] == 'validar') {
        console.log(chalk.yellow('Links validados:', validatingURL(result)))
    } else {
        console.log(chalk.bold('Lista de links:'), result)
    }
}

processedText(path)