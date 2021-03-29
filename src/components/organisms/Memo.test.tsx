import { cutText } from './Memo';

const testCases = ['aaa', '', 'typescriptとReactを今日は勉強した。「@@@」'];
const results = [
  ['aaa'],
  [],
  ['typescriptとReactを今日は', '勉強した。「@@@」'],
];

test('', () => {
  for (let i = 0; i < testCases.length; i += 1) {
    expect(cutText(testCases[i])).toEqual(results[i]);
  }
});
