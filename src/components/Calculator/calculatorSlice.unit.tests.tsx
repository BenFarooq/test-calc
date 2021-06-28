import { reducer, actions } from './calculatorSlice';

const initialState = {
  input1Value: '',
  input2Value: '',
  calculatedValue: 0,
};

describe('Calculator reducer', () => {
  it('should be able to set first addend', () => {
    const resultState = reducer(initialState, actions.setInput1Value(1));
    // assert
    expect(resultState).toMatchObject({
      input1Value: 1,
      input2Value: '',
      calculatedValue: 0,
    });
  });

  it('should be able to set second addend', () => {
    const resultState = reducer(initialState, actions.setInput2Value(1));
    // assert
    expect(resultState).toMatchObject({
      input1Value: '',
      input2Value: 1,
      calculatedValue: 0,
    });
  });

  it('should be able to clear both addends', () => {
    const resultState = reducer(
      {
        input1Value: 1,
        input2Value: 2,
        calculatedValue: 3,
      },
      actions.clear()
    );
    // assert
    expect(resultState).toMatchObject(initialState);
  });

  it('should be able to sum addends', () => {
    const resultState = reducer(
      {
        input1Value: 1,
        input2Value: 2,
        calculatedValue: 0,
      },
      actions.calculate()
    );
    // assert
    expect(resultState).toMatchObject({
      input1Value: 1,
      input2Value: 2,
      calculatedValue: 3,
    });
  });
});
