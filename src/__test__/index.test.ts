import vuese, { ParserOptions } from '../index'
import sfcToEstree from '../sfcToEstree'
import * as path from 'path'
import * as fs from 'fs'

const p = path.resolve(__dirname, '../../__fixtures__/common.vue')
const source = fs.readFileSync(p, 'utf-8')

test('get the correct props value', () => {
  const ast = sfcToEstree(source)
  const options: ParserOptions = {
    onProp: origValue => {
      expect(origValue).toEqual({ a: String })
    }
  }
  vuese(ast, options)
})
