import { expect,test ,describe} from 'vitest';
import { isBuffer } from '../src/language/isBuffer';


describe('[isBuffer test]',()=>{
  test('isBuffer(Buffer.from("test","utf-8"))=>true',()=>{
    expect(isBuffer(Buffer.from('test','utf-8'))).toEqual(true)
  })
  test('isBuffer(new Uint8Array(2))=>false',()=>{
    expect(isBuffer(new Uint8Array(2))).toEqual(false)
  })
})
