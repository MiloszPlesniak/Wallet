import Buttons from './Buttons';
import { render, screen } from '@testing-library/react';

describe('Buttons tests', () => {
  test('renders Buttons component', () => {
    render(
      <Buttons
        firstButtonText="First Button"
        secondButtonText="Second Button"
      />
    );
    screen.getByText('First Button');
    screen.getByText('Second Button');
  });

  test('testing Buttons handlers', () => {
    const firstButtonHandler = jest.fn();
    const secondButtonHandler = jest.fn();
    render(
      <Buttons
        firstButtonText="First Button"
        secondButtonText="Second Button"
        firstButtonHandler={firstButtonHandler}
        secondButtonHandler={secondButtonHandler}
      />
    );
    screen.getByText('First Button').click();
    expect(firstButtonHandler).toHaveBeenCalledTimes(1);
    screen.getByText('Second Button').click();
    expect(secondButtonHandler).toHaveBeenCalledTimes(1);
  });

  test('testing Buttons types', () => {
    render(
      <Buttons
        firstButtonText="First Button"
        secondButtonText="Second Button"
        firstButtonType="submit"
      />
    );
    screen.getByText('First Button').hasAttribute('type', 'submit');
    screen.getByText('Second Button').hasAttribute('type', 'button');
  });
});
