import findFile from './index.js'
import chalk from 'chalk'

const path = process.argv

const processedText = (filePath) => {
    const result = findFile(filePath[2])
    console.log(chalk.bold('Lista de links:'), result)
}

processedText(path)