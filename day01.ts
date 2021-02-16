#!/usr/bin/env node
import { readFileSync } from 'fs'
async function run() {
    const contents = await readFileSync('./day01_input.txt', 'utf-8')
    const values = contents.trim().split('\n').map((value) => parseInt(value))
    const indexedValues = new Set()
    for(let value of values) {
        indexedValues.add(value)
    }
    for(let i = 0; i < values.length - 1; i++) {
        for(let j = i+1; j < values.length; j++) {
            const first = values[i]
            const second = values[j]
            const third = 2020 - first - second
            if (indexedValues.has(third)){
                console.log("Found set " + first + ", " + second + ", " + third)
                console.log("Product: " + (first * second * third))
                return
            }
        }
    }
    console.error("No pair found")
}

run()