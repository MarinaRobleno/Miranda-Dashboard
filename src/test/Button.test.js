import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('Button takes background color red because of check Out state', () => {
  render(
      <Button checkOut>Check Out</Button>
  )  
  expect(screen.queryByText('Check Out')).toHaveStyle('background : #E23428')
});

test('Button takes background color green because of check In state', () => {
  render(
      <Button checkIn>Check In</Button>
  )  
  expect(screen.queryByText('Check In')).toHaveStyle('background : #5AD07A')
});

test('Button takes background color yellow because of in progress state', () => {
  render(
      <Button inProgress>In progress</Button>
  )  
  expect(screen.queryByText('In progress')).toHaveStyle('background : #FF9C3A')
});

test('Button takes background color grey because of prop absence', () => {
  render(
      <Button>Text</Button>
  )  
  expect(screen.queryByText('Text')).toHaveStyle('background : #EEF9F2')
});

test('Button takes color red because of archive text', () => {
  render(
      <Button archive>Archive</Button>
  )  
  expect(screen.queryByText('Archive')).toHaveStyle('color : #E23428')
});

test('Button takes color grey because of View notes text', () => {
  render(
      <Button notes>View Notes</Button>
  )  
  expect(screen.queryByText('View Notes')).toHaveStyle('color : #212121')
});

test('Button takes color green because of contact text', () => {
  render(
      <Button contact>Contact</Button>
  )  
  expect(screen.queryByText('Contact')).toHaveStyle('color : #135846')
});

test('Button takes color white because of prop absence', () => {
  render(
      <Button>Text</Button>
  )  
  expect(screen.queryByText('Text')).toHaveStyle('color : #FFFFFF')
});