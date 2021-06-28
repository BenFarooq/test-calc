import * as React from 'react';

import { Button } from '#components/Button';
import { useAppSelector, useAppDispatch } from '#components/Application/store';
import {
  selectCalculatedValue,
  selectInput1Value,
  selectInput2Value,
  selectIsNothingToClean,
  selectIsNothingToSum,
  actions as calculatorSliceActions,
} from './calculatorSlice';

import { Wrapper, Row, Input, ButtonsRow } from './styled';

export function Calculator() {
  const inpit1Ref = React.useRef<HTMLInputElement>();

  const input1Value = useAppSelector(selectInput1Value);
  const input2Value = useAppSelector(selectInput2Value);
  const calculatedValue = useAppSelector(selectCalculatedValue);
  const isNothingToClean = useAppSelector(selectIsNothingToClean);
  const isNothingToSum = useAppSelector(selectIsNothingToSum);

  const dispatch = useAppDispatch();

  const handleInput1Change = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsedValue = Number.parseFloat(e.target.value);
      dispatch(calculatorSliceActions.setInput1Value(parsedValue === NaN ? '' : parsedValue));
    },
    [dispatch, calculatorSliceActions]
  );
  const handleInput2Change = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const parsedValue = Number.parseFloat(e.target.value);
      dispatch(calculatorSliceActions.setInput2Value(parsedValue === NaN ? '' : parsedValue));
    },
    [dispatch, calculatorSliceActions]
  );
  const handleClearButtonClick = React.useCallback(() => {
    dispatch(calculatorSliceActions.clear());
    inpit1Ref.current.focus();
  }, [dispatch, calculatorSliceActions, inpit1Ref]);
  const handleAddButtonClick = React.useCallback(() => {
    dispatch(calculatorSliceActions.calculate());
  }, [dispatch, calculatorSliceActions]);

  return (
    <Wrapper>
      <Row>
        <Input
          ref={inpit1Ref}
          type="number"
          aria-label="first-addend"
          onChange={handleInput1Change}
          value={input1Value}
        />
        <span>+</span>
        <Input type="number" aria-label="second-addend" onChange={handleInput2Change} value={input2Value} />
        <span>=</span>
        <Input type="number" aria-label="sum" readOnly value={calculatedValue} />
      </Row>
      <ButtonsRow>
        <Button disabled={isNothingToClean} onClick={handleClearButtonClick}>
          Clear
        </Button>
        <Button disabled={isNothingToSum} onClick={handleAddButtonClick}>
          Add
        </Button>
      </ButtonsRow>
    </Wrapper>
  );
}
