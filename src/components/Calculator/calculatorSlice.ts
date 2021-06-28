import { RootState } from '#components/Application/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CalculatorState {
  input1Value: number | string;
  input2Value: number | string;
  calculatedValue: number;
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    input1Value: '',
    input2Value: '',
    calculatedValue: 0,
  } as CalculatorState,
  reducers: {
    setInput1Value: (state, action: PayloadAction<number | string>) => {
      return {
        ...state,
        input1Value: action.payload,
      };
    },
    setInput2Value: (state, action: PayloadAction<number | string>) => {
      return {
        ...state,
        input2Value: action.payload,
      };
    },
    clear: (state) => {
      return {
        ...state,
        input1Value: '',
        input2Value: '',
        calculatedValue: 0,
      };
    },
    calculate: (state) => {
      if (Number.isFinite(state.input1Value) && Number.isFinite(state.input2Value)) {
        return {
          ...state,
          calculatedValue: (state.input1Value as number) + (state.input2Value as number),
        };
      }

      return {
        ...state,
        calculatedValue: 0,
      };
    },
  },
});

export const actions = calculatorSlice.actions;

export const reducer = calculatorSlice.reducer;

export const selectInput1Value = (state: RootState) => state.calculator.input1Value;
export const selectInput2Value = (state: RootState) => state.calculator.input2Value;
export const selectCalculatedValue = (state: RootState) => state.calculator.calculatedValue;
export const selectIsNothingToClean = (state: RootState) => {
  const input1Value = selectInput1Value(state);
  const input2Value = selectInput2Value(state);

  return input1Value === '' && input2Value === '';
};
export const selectIsNothingToSum = (state: RootState) => {
  const input1Value = selectInput1Value(state);
  const input2Value = selectInput2Value(state);

  return input1Value === '' || input2Value === '';
};
