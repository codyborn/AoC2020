#!/usr/bin/env node
import { readFileSync } from 'fs'

async function run() {
    const contents = await readFileSync('./day02_input.txt', 'utf-8')
    const values = contents.trim().split('\n')
    
    let validCount: number = 0
    for(let line of values) {
        const components = line.split(' ')
        const rangeParts = components[0].split('-')
        const rangeStart = parseInt(rangeParts[0])
        const rangeEnd = parseInt(rangeParts[1])
        const letter = components[1].charAt(0)
        const password = components[2]
        const firstMatch = password.charAt(rangeStart-1) === letter
        const secondMatch = password.charAt(rangeEnd-1) === letter
        if ((firstMatch || secondMatch) && !(firstMatch && secondMatch)) {
            validCount++
        }
    }
    console.log("Valid password count: " + validCount)
}

run()